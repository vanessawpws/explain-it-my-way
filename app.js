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

const CUSTOM_ID = "__custom__";
const GENERATE_LABEL = "\u2728 Tell me the story";

let currentMarkdown = "";
let currentTitle = "";
let customConcept = null; // concept suggested live for a topic the user typed
let currentRequest = null; // AbortController for an in-flight story

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
  currentMarkdown = "";
  showError("");
}

// Builds the story as Markdown from a concept's chosen metaphor.
function buildMarkdown(metaphor) {
  const lines = [`# ${metaphor.title}`, "", metaphor.hook, ""];

  for (const item of metaphor.beats) {
    lines.push(`## ${item.heading}`, "", item.story, "");
  }

  lines.push("## The Cheat Sheet", "");
  // Lowercase the first letter so each line reads as one sentence
  // ("The order window is the connection to the internet"), but leave acronyms alone.
  const lowerFirst = (text) =>
    /^[A-Z](?![A-Z])/.test(text) ? text[0].toLowerCase() + text.slice(1) : text;
  for (const item of metaphor.beats) {
    lines.push(
      `- **${item.metaphorPart}** is **${lowerFirst(item.realPart)}**`,
    );
  }
  lines.push("");

  lines.push("## Where the Story Stops Working", "", metaphor.limit, "");
  lines.push("## Next Time You See It", "", metaphor.closing, "");

  return lines.join("\n");
}

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (text) =>
  escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

function renderMarkdown(markdown) {
  const html = [];
  let inList = false;
  let inCallout = false;
  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };
  const closeCallout = () => {
    if (inCallout) {
      html.push("</aside>");
      inCallout = false;
    }
  };

  for (const line of markdown.split("\n")) {
    if (line.startsWith("# ")) {
      closeList();
      html.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      closeList();
      closeCallout();
      const heading = line.slice(3);
      // The honest "where this breaks down" section gets its own highlighted box.
      if (heading === "Where the Story Stops Working") {
        html.push('<aside class="callout">');
        inCallout = true;
      }
      html.push(`<h2>${inline(heading)}</h2>`);
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
  closeCallout();
  return html.join("\n");
}

fillSelect(conceptSelect, "Pick something you're curious about...", CONCEPTS);
fillSelect(metaphorSelect, "Pick a topic first", []);

// Live stories (any topic) only exist when the server has an API key.
// The setup note is for you, so it only shows when running on your own machine.
const LIVE_OFF_NOTE =
  "Want a story for any topic? Start server.js with ANTHROPIC_API_KEY set to turn on live stories.";
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
      "Type any tech idea, then ask for story suggestions.";
    fillSelect(metaphorSelect, "Suggest stories first", []);
    metaphorSelect.disabled = true;
    customInput.focus();
    return;
  }

  const concept = findConcept(conceptSelect.value);
  if (!concept) {
    conceptHint.textContent = "";
    fillSelect(metaphorSelect, "Pick a topic first", []);
    metaphorSelect.disabled = true;
    return;
  }

  conceptHint.textContent = concept.plain;
  fillSelect(
    metaphorSelect,
    "Pick a story that feels familiar...",
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
    fillSelect(
      metaphorSelect,
      "Pick a story that feels familiar...",
      customConcept.metaphors,
    );
    metaphorSelect.disabled = false;
  } catch (err) {
    fillSelect(metaphorSelect, "Suggest stories first", []);
    showError(friendly(err));
  } finally {
    suggestButton.disabled = false;
    suggestButton.textContent = "Suggest stories";
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

// Live story: the server streams Markdown, and we render it as it arrives.
async function streamStory(concept, metaphor) {
  const controller = new AbortController();
  currentRequest = controller;
  generateButton.disabled = true;
  generateButton.textContent = "Writing your story...";
  actions.hidden = true;
  docEl.innerHTML = "";
  output.hidden = false;
  output.scrollIntoView({ behavior: "smooth", block: "start" });

  let text = "";
  try {
    const response = await postJson(
      "api/story",
      {
        concept: concept.name,
        metaphor: metaphor.name,
        whyItFits: metaphor.whyItFits,
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
    currentTitle = `${slug(concept.name)}-as-${slug(metaphor.name)}`;
    docEl.innerHTML = renderMarkdown(text);
    actions.hidden = false;
  } catch (err) {
    if (err.name === "AbortError") return;
    if (text) {
      showError("The story was cut off. Please try again.");
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
    streamStory(concept, metaphor);
    return;
  }

  currentMarkdown = buildMarkdown(metaphor);
  currentTitle = `${concept.id}-as-${metaphor.id}`;
  docEl.innerHTML = renderMarkdown(currentMarkdown);
  output.hidden = false;
  output.scrollIntoView({ behavior: "smooth", block: "start" });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentMarkdown);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Copy failed";
  }
  setTimeout(() => {
    copyButton.textContent = "Copy as Markdown";
  }, 1600);
});

downloadButton.addEventListener("click", () => {
  const blob = new Blob([currentMarkdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${currentTitle}.md`;
  link.click();
  URL.revokeObjectURL(url);
});

// Deep link: ?concept=data-center&story=kitchen opens that story directly,
// so you can link to one specific story from a blog post.
(function openFromLink() {
  const params = new URLSearchParams(location.search);
  const concept = findConcept(params.get("concept"));
  const metaphor =
    concept && concept.metaphors.find((m) => m.id === params.get("story"));
  if (!metaphor) return;

  conceptSelect.value = concept.id;
  conceptSelect.dispatchEvent(new Event("change"));
  metaphorSelect.value = metaphor.id;
  metaphorSelect.dispatchEvent(new Event("change"));
  generateButton.click();
})();
