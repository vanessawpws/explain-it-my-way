const conceptSelect = document.getElementById("concept");
const metaphorSelect = document.getElementById("metaphor");
const conceptHint = document.getElementById("concept-hint");
const metaphorHint = document.getElementById("metaphor-hint");
const generateButton = document.getElementById("generate");
const output = document.getElementById("output");
const docEl = document.getElementById("doc");
const copyButton = document.getElementById("copy");
const downloadButton = document.getElementById("download");
const actions = document.getElementById("actions");
const customBox = document.getElementById("custom-concept");
const customInput = document.getElementById("custom-input");
const suggestButton = document.getElementById("suggest");
const errorEl = document.getElementById("error");
const conceptArt = document.getElementById("concept-art");
const docArt = document.getElementById("doc-art");
const surpriseButton = document.getElementById("surprise");
const audienceField = document.getElementById("audience-field");
const audienceSelect = document.getElementById("audience");

const CUSTOM_ID = "__custom__";
const GENERATE_LABEL = "\u2728 Make it make sense";

// Stickers are our own inline SVG (see art.js), so setting innerHTML is safe.
const setArt = (el, id) => {
  el.innerHTML = id ? ART[id] || ART.custom : "";
};

let currentMarkdown = "";
let currentTitle = "";
let customConcept = null; // concept suggested live for a topic the user typed
let currentRequest = null; // AbortController for an in-flight explanation
let liveOn = false; // true when the server has an API key

const findConcept = (id) => CONCEPTS.find((concept) => concept.id === id);

const currentConcept = () =>
  conceptSelect.value === CUSTOM_ID
    ? customConcept
    : findConcept(conceptSelect.value);

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);

function showError(message) {
  errorEl.textContent = message || "";
  errorEl.hidden = !message;
}

async function apiError(response) {
  try {
    return (await response.json()).error || "Something went wrong.";
  } catch {
    return "Something went wrong.";
  }
}

const friendly = (err) =>
  err instanceof TypeError ? "Could not reach the server." : err.message;

const postJson = (url, body, signal) =>
  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });

function fillSelect(select, placeholder, items) {
  select.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  select.appendChild(first);
  for (const item of items) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.emoji ? `${item.emoji}  ${item.name}` : item.name;
    select.appendChild(option);
  }
}

function clearOutput() {
  if (currentRequest) {
    currentRequest.abort();
    currentRequest = null;
  }
  generateButton.textContent = GENERATE_LABEL;
  output.hidden = true;
  actions.hidden = false;
  docEl.innerHTML = "";
  setArt(docArt, null);
  currentMarkdown = "";
  showError("");
}

const escapeHtml = (text) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inline = (text) =>
  escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

// Diagrams are written as Markdown images with a special address, so the same
// syntax works in built-in docs and in live stories (the model can't draw files):
//   ![caption](flow:Your phone|The internet|Data center)   steps in order
//   ![caption](map:Computers=The workers|Storage=The shelves)   real part = comparison
// A plain image from the images/ folder also works: ![caption](images/name.svg)
const IMAGE_LINE = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/;
const LOCAL_IMAGE = /^images\/[\w-]+\.(svg|png|jpe?g|webp)$/;
const MAX_DIAGRAM_ITEMS = 6;

function parseDiagram(src) {
  if (src.startsWith("flow:")) {
    const steps = src
      .slice(5)
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, MAX_DIAGRAM_ITEMS);
    return steps.length >= 2 ? { type: "flow", steps } : null;
  }
  if (src.startsWith("map:")) {
    const rows = src
      .slice(4)
      .split("|")
      .map((pair) => pair.split("=").map((s) => s.trim()))
      .filter((pair) => pair.length === 2 && pair[0] && pair[1])
      .slice(0, MAX_DIAGRAM_ITEMS);
    return rows.length >= 2 ? { type: "map", rows } : null;
  }
  return null;
}

function renderFigure(alt, src) {
  const caption = alt ? `<figcaption>${inline(alt)}</figcaption>` : "";
  const diagram = parseDiagram(src);

  if (diagram && diagram.type === "flow") {
    const steps = diagram.steps
      .map((s) => `<span class="diagram-box">${inline(s)}</span>`)
      .join('<span class="flow-arrow" aria-hidden="true">&rarr;</span>');
    return `<figure class="diagram"><div class="flow" aria-hidden="true">${steps}</div>${caption}</figure>`;
  }
  if (diagram && diagram.type === "map") {
    const rows = diagram.rows
      .map(
        ([real, comparison]) =>
          `<div class="map-row"><span class="diagram-box map-real">${inline(real)}</span><span class="map-eq" aria-hidden="true">&harr;</span><span class="diagram-box map-comparison">${inline(comparison)}</span></div>`,
      )
      .join("");
    return `<figure class="diagram"><div class="map" aria-hidden="true">${rows}</div>${caption}</figure>`;
  }
  if (LOCAL_IMAGE.test(src)) {
    return `<figure class="diagram"><img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" />${caption}</figure>`;
  }
  return "";
}

// Copy and download need plain Markdown that works outside this page,
// so diagrams become a short quoted block instead of a custom image address.
function toPortableMarkdown(markdown) {
  return markdown
    .split("\n")
    .map((line) => {
      const match = line.match(IMAGE_LINE);
      const diagram = match && parseDiagram(match[2]);
      if (!diagram) return line;
      const body =
        diagram.type === "flow"
          ? `> ${diagram.steps.join(" \u2192 ")}`
          : diagram.rows.map(([real, comp]) => `> ${real} \u2194 ${comp}`).join("\n>\n");
      return `> **Diagram:** ${match[1]}\n>\n${body}`;
    })
    .join("\n");
}

function renderMarkdown(markdown) {
  const html = [];
  let inList = false;
  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  for (const line of markdown.split("\n")) {
    if (line.startsWith("![")) {
      // A half-streamed image line is skipped until its closing bracket arrives.
      const match = line.match(IMAGE_LINE);
      if (match) {
        closeList();
        html.push(renderFigure(match[1], match[2]));
      }
    } else if (line.startsWith("# ")) {
      closeList();
      html.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      closeList();
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("- ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inline(line.slice(2))}</li>`);
    } else if (line.trim()) {
      closeList();
      html.push(`<p>${inline(line)}</p>`);
    } else {
      closeList();
    }
  }
  closeList();
  return html.join("\n");
}

fillSelect(
  conceptSelect,
  "Pick something you've been nodding along to...",
  CONCEPTS,
);
fillSelect(metaphorSelect, "Pick a topic first", []);

// Live mode (any topic, and writing for a chosen reader) only exists when the
// server has an API key. The setup note is for you, so it only shows when
// running on your own machine.
const LIVE_OFF_NOTE =
  "Want an explanation for any topic, or one written for a specific reader? Run the server with ANTHROPIC_API_KEY set to turn on live mode.";
const RUNNING_LOCALLY = ["", "localhost", "127.0.0.1"].includes(
  location.hostname,
);

function showLiveOffNote() {
  if (RUNNING_LOCALLY && !conceptSelect.value) {
    conceptHint.textContent = LIVE_OFF_NOTE;
  }
}

fetch("api/status")
  .then((response) => response.json())
  .then((status) => {
    if (status.live) {
      liveOn = true;
      audienceField.hidden = false;
      const option = document.createElement("option");
      option.value = CUSTOM_ID;
      option.textContent = "\u2728  Something else...";
      conceptSelect.appendChild(option);
    } else {
      showLiveOffNote();
    }
  })
  .catch(showLiveOffNote);

conceptSelect.addEventListener("change", () => {
  clearOutput();
  generateButton.disabled = true;
  metaphorHint.textContent = "";
  customConcept = null;

  const isCustom = conceptSelect.value === CUSTOM_ID;
  customBox.hidden = !isCustom;

  if (isCustom) {
    conceptHint.textContent =
      "Type any tech idea, then ask for comparison suggestions.";
    setArt(conceptArt, "custom");
    fillSelect(metaphorSelect, "Suggest comparisons first", []);
    metaphorSelect.disabled = true;
    customInput.focus();
    return;
  }

  const concept = findConcept(conceptSelect.value);
  if (!concept) {
    conceptHint.textContent = "";
    setArt(conceptArt, null);
    fillSelect(metaphorSelect, "Pick a topic first", []);
    metaphorSelect.disabled = true;
    return;
  }

  conceptHint.textContent = concept.plain;
  setArt(conceptArt, concept.id);
  fillSelect(
    metaphorSelect,
    "Pick a comparison that feels familiar...",
    concept.metaphors,
  );
  metaphorSelect.disabled = false;
});

suggestButton.addEventListener("click", async () => {
  const topic = customInput.value.trim();
  clearOutput();
  customConcept = null;
  generateButton.disabled = true;
  metaphorHint.textContent = "";
  conceptHint.textContent = "";
  setArt(conceptArt, null);

  if (topic.length < 2) {
    showError("Type the tech idea you want explained.");
    return;
  }

  fillSelect(metaphorSelect, "Thinking...", []);
  metaphorSelect.disabled = true;
  suggestButton.disabled = true;
  suggestButton.textContent = "Thinking...";

  try {
    const response = await postJson("api/metaphors", { concept: topic });
    if (!response.ok) throw new Error(await apiError(response));
    const data = await response.json();

    customConcept = {
      name: data.name,
      plain: data.plain,
      metaphors: data.metaphors.map((m, i) => ({ ...m, id: `g${i}` })),
    };
    conceptHint.textContent = data.plain;
    setArt(conceptArt, "custom");
    fillSelect(
      metaphorSelect,
      "Pick a comparison that feels familiar...",
      customConcept.metaphors,
    );
    metaphorSelect.disabled = false;
  } catch (err) {
    fillSelect(metaphorSelect, "Suggest comparisons first", []);
    showError(friendly(err));
  } finally {
    suggestButton.disabled = false;
    suggestButton.textContent = "Suggest comparisons";
  }
});

customInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") suggestButton.click();
});

metaphorSelect.addEventListener("change", () => {
  clearOutput();
  const concept = currentConcept();
  const metaphor =
    concept && concept.metaphors.find((m) => m.id === metaphorSelect.value);

  metaphorHint.textContent = metaphor
    ? `Why it fits: ${metaphor.whyItFits}`
    : "";
  generateButton.disabled = !metaphor;
});

// Changing who the explanation is for starts the page over, like the other pickers.
audienceSelect.addEventListener("change", () => {
  clearOutput();
});

// Live explanation: the server streams Markdown, and we render it as it arrives.
// Built-in concepts can use this too, when the reader picks a specific audience.
async function streamStory(concept, metaphor, artId) {
  const controller = new AbortController();
  currentRequest = controller;
  generateButton.disabled = true;
  generateButton.textContent = "Writing your explanation...";
  actions.hidden = true;
  docEl.innerHTML = "";
  setArt(docArt, artId);
  output.hidden = false;
  output.scrollIntoView({ behavior: "smooth", block: "start" });

  const audience = audienceSelect.value;
  let text = "";
  try {
    const response = await postJson(
      "api/story",
      {
        concept: concept.name,
        metaphor: metaphor.name,
        whyItFits: metaphor.whyItFits,
        ...(audience && { audience }),
      },
      controller.signal,
    );
    if (!response.ok) throw new Error(await apiError(response));

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      text += decoder.decode(value, { stream: true });
      docEl.innerHTML = renderMarkdown(text);
    }
    text += decoder.decode();

    currentMarkdown = text;
    currentTitle = `${slug(concept.name)}-as-${slug(metaphor.name)}${audience ? `-for-${audience}` : ""}`;
    docEl.innerHTML = renderMarkdown(text);
    actions.hidden = false;
  } catch (err) {
    if (err.name === "AbortError") return;
    if (text) {
      showError("The explanation was cut off. Please try again.");
    } else {
      output.hidden = true;
      showError(friendly(err));
    }
  } finally {
    if (currentRequest === controller) {
      currentRequest = null;
      generateButton.disabled = false;
      generateButton.textContent = GENERATE_LABEL;
    }
  }
}

generateButton.addEventListener("click", () => {
  const concept = currentConcept();
  const metaphor =
    concept && concept.metaphors.find((m) => m.id === metaphorSelect.value);
  if (!metaphor) return;

  if (conceptSelect.value === CUSTOM_ID) {
    streamStory(concept, metaphor, "custom");
    return;
  }

  // A built-in concept written for a specific reader has to be generated fresh.
  if (liveOn && audienceSelect.value) {
    streamStory(concept, metaphor, concept.id);
    return;
  }

  currentMarkdown = metaphor.doc;
  currentTitle = `${concept.id}-as-${metaphor.id}`;
  docEl.innerHTML = renderMarkdown(currentMarkdown);
  setArt(docArt, concept.id);
  output.hidden = false;
  output.scrollIntoView({ behavior: "smooth", block: "start" });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(toPortableMarkdown(currentMarkdown));
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Copy failed";
  }
  setTimeout(() => {
    copyButton.textContent = "Copy as Markdown";
  }, 1600);
});

downloadButton.addEventListener("click", () => {
  const blob = new Blob([toPortableMarkdown(currentMarkdown)], {
    type: "text/markdown",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${currentTitle}.md`;
  link.click();
  URL.revokeObjectURL(url);
});

// Fills in both pickers for a built-in story and shows it.
function openStory(concept, metaphor) {
  conceptSelect.value = concept.id;
  conceptSelect.dispatchEvent(new Event("change"));
  metaphorSelect.value = metaphor.id;
  metaphorSelect.dispatchEvent(new Event("change"));
  generateButton.click();
}

// "Surprise me": a random built-in concept and comparison, never the one on screen.
surpriseButton.addEventListener("click", () => {
  const pairs = CONCEPTS.flatMap((concept) =>
    concept.metaphors.map((metaphor) => ({ concept, metaphor })),
  );
  const others = pairs.filter(
    ({ concept, metaphor }) =>
      !(
        conceptSelect.value === concept.id && metaphorSelect.value === metaphor.id
      ),
  );
  const pick = others[Math.floor(Math.random() * others.length)];
  openStory(pick.concept, pick.metaphor);
});

// Deep link: ?concept=data-center&story=kitchen opens that explanation directly,
// so you can link to one specific one from a blog post.
(function openFromLink() {
  const params = new URLSearchParams(location.search);
  const concept = findConcept(params.get("concept"));
  const metaphor =
    concept && concept.metaphors.find((m) => m.id === params.get("story"));
  if (metaphor) openStory(concept, metaphor);
})();
