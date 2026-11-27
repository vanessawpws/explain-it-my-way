// Tiny zero-dependency server for Explain It My Way.
//
// - Serves the static app (index.html, app.js, art.js, data.js, styles.css).
// - Optionally turns on "live" stories for any topic by proxying to the
//   Anthropic API. The API key stays on the server and never reaches the browser.
//
// Endpoints used by app.js:
//   GET  /api/status     -> { live: boolean }
//   POST /api/metaphors  -> { name, plain, metaphors: [{ name, whyItFits }] }
//   POST /api/story      -> streamed Markdown
//
// Run:  ANTHROPIC_API_KEY=sk-ant-... npm start   (or put it in a .env file)

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// Load .env if present (built into Node 20.12+). Real env vars win over the file.
try {
  process.loadEnvFile(path.join(__dirname, ".env"));
} catch {
  // No .env file, which is fine.
}

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const API_KEY = process.env.ANTHROPIC_API_KEY || "";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5";
const LIVE = Boolean(API_KEY);

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";

// Limits to keep input sane and API cost under control.
const MAX_BODY_BYTES = 10 * 1024;
const MAX_CONCEPT = 80;
const MAX_METAPHOR = 120;
const MAX_WHY = 500;
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 20 };

// Only these files are ever served, so server.js, .env, and .git stay private.
const STATIC_FILES = {
  "/": "index.html",
  "/index.html": "index.html",
  "/app.js": "app.js",
  "/art.js": "art.js",
  "/data.js": "data.js",
  "/styles.css": "styles.css",
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

// ---------------------------------------------------------------- helpers

function sendJson(res, status, body) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(body));
}

const sendError = (res, status, message) =>
  sendJson(res, status, { error: message });

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error("Request too large."), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch {
        reject(Object.assign(new Error("Invalid JSON."), { status: 400 }));
      }
    });
    req.on("error", reject);
  });
}

// Reads a trimmed string field, enforcing a length cap.
function field(body, name, max, { required = true } = {}) {
  const value = typeof body[name] === "string" ? body[name].trim() : "";
  if (required && value.length < 2) {
    throw Object.assign(new Error(`Missing "${name}".`), { status: 400 });
  }
  if (value.length > max) {
    throw Object.assign(new Error(`"${name}" is too long.`), { status: 400 });
  }
  return value;
}

// Simple in-memory, per-IP rate limiter for the API routes.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(ip);
  }
}, RATE_LIMIT.windowMs).unref();

// ------------------------------------------------------------- Anthropic

const VOICE = `You write for "Explain It My Way", a site that explains tech to people who keep nodding along without really understanding. Your voice is warm, plain, and human. No jargon without an immediate plain-English explanation. No hype, no robot voice, no emojis. Treat the reader as smart but new to the topic.`;

async function callAnthropic({ system, user, maxTokens, stream, signal }) {
  const response = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      stream,
      system,
      messages: [{ role: "user", content: user }],
    }),
    signal,
  });

  if (!response.ok) {
    let detail = "";
    try {
      detail = (await response.json()).error?.message || "";
    } catch {
      // ignore
    }
    console.error(`Anthropic API error ${response.status}: ${detail}`);
    const message =
      response.status === 401
        ? "The server's API key was rejected."
        : response.status === 429
          ? "The AI service is busy. Please try again in a moment."
          : "The AI service had a problem. Please try again.";
    throw Object.assign(new Error(message), { status: 502 });
  }
  return response;
}

// Pulls the first JSON object out of a model reply, even if it added extra text.
function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("No JSON found.");
  return JSON.parse(text.slice(start, end + 1));
}

const str = (value, max) =>
  typeof value === "string" && value.trim() ? value.trim().slice(0, max) : "";

async function handleMetaphors(req, res) {
  const body = await readJson(req);
  const topic = field(body, "concept", MAX_CONCEPT);

  const system = `${VOICE}

Given a tech concept, you suggest three everyday stories (metaphors) that explain it. Choose metaphors that map onto how the concept really works, not just ones that sound cute. Pick three from clearly different parts of life (for example food, school, travel, sports, family, games, shopping).

Reply with ONLY a JSON object, no other text, in exactly this shape:
{
  "name": "the concept's name, short and properly capitalized",
  "plain": "one or two plain sentences saying what it is, with no jargon",
  "metaphors": [
    { "name": "A short label like 'A restaurant kitchen'", "whyItFits": "one sentence on which real parts of the concept it matches" }
  ]
}
The "metaphors" array must contain exactly 3 items. If the input is not a tech or computing idea, still reply in this shape but treat it as the closest tech concept you can.`;

  const response = await callAnthropic({
    system,
    user: `Concept: <concept>${topic}</concept>`,
    maxTokens: 800,
    stream: false,
  });
  const data = await response.json();
  const text = (data.content || [])
    .map((block) => (block.type === "text" ? block.text : ""))
    .join("");

  let parsed;
  try {
    parsed = extractJson(text);
  } catch {
    throw Object.assign(new Error("Could not come up with stories. Try again."), {
      status: 502,
    });
  }

  const metaphors = (Array.isArray(parsed.metaphors) ? parsed.metaphors : [])
    .map((m) => ({
      name: str(m?.name, MAX_METAPHOR),
      whyItFits: str(m?.whyItFits, MAX_WHY),
    }))
    .filter((m) => m.name && m.whyItFits)
    .slice(0, 3);

  const name = str(parsed.name, MAX_CONCEPT) || topic;
  const plain = str(parsed.plain, 400);
  if (!plain || metaphors.length === 0) {
    throw Object.assign(new Error("Could not come up with stories. Try again."), {
      status: 502,
    });
  }

  sendJson(res, 200, { name, plain, metaphors });
}

// The writing voice lives in writing/style-guide.md, with a model answer in
// writing/example.md. Edit those files to change how every live story reads.
// (The renderer in app.js only understands "# ", "## ", "- ", paragraphs, and **bold**.
// The style guide tells the model to stay within that.)
function loadWriting(name) {
  try {
    return fs.readFileSync(path.join(__dirname, "writing", name), "utf8").trim();
  } catch (err) {
    console.error(`Missing writing/${name}: ${err.message}`);
    process.exit(1);
  }
}

const STYLE_GUIDE = loadWriting("style-guide.md");
const STYLE_EXAMPLE = loadWriting("example.md");

const STORY_SYSTEM = `${VOICE}

You write one explanation of a tech concept, built around one everyday comparison the reader already knows. Follow the style guide below exactly. Then study the example. It explains a different concept, so match its voice, rhythm, and structure but never reuse its content or its warehouse comparison.

<style_guide>
${STYLE_GUIDE}
</style_guide>

<example>
${STYLE_EXAMPLE}
</example>

Use the comparison the user gives you. Make the mapping accurate: each piece of the comparison must stand for exactly one real piece of the concept. If a part of the concept doesn't fit the comparison, say so plainly instead of forcing it.

Output only the Markdown, with no preamble and no code fence.`;

async function handleStory(req, res) {
  const body = await readJson(req);
  const concept = field(body, "concept", MAX_CONCEPT);
  const metaphor = field(body, "metaphor", MAX_METAPHOR);
  const whyItFits = field(body, "whyItFits", MAX_WHY, { required: false });

  const controller = new AbortController();
  // Stop paying for tokens if the reader navigates away or cancels.
  res.on("close", () => controller.abort());

  const response = await callAnthropic({
    system: STORY_SYSTEM,
    user: `Concept: <concept>${concept}</concept>\nComparison: <comparison>${metaphor}</comparison>\nWhy it fits: <why>${whyItFits}</why>\n\nWrite the explanation now.`,
    maxTokens: 2500,
    stream: true,
    signal: controller.signal,
  });

  res.writeHead(200, {
    "content-type": "text/markdown; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  });

  const decoder = new TextDecoder();
  let buffer = "";
  try {
    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });
      let boundary;
      while ((boundary = buffer.indexOf("\n\n")) !== -1) {
        const event = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        const dataLine = event.split("\n").find((l) => l.startsWith("data:"));
        if (!dataLine) continue;
        let payload;
        try {
          payload = JSON.parse(dataLine.slice(5).trim());
        } catch {
          continue;
        }
        if (payload.type === "content_block_delta" && payload.delta?.text) {
          res.write(payload.delta.text);
        } else if (payload.type === "error") {
          throw new Error(payload.error?.message || "Stream error.");
        }
      }
    }
    res.end();
  } catch (err) {
    if (err.name !== "AbortError") console.error("Story stream failed:", err.message);
    // Headers are already sent, so just end the stream. The client reports a cut-off story.
    res.destroy();
  }
}

// ---------------------------------------------------------------- routing

function serveStatic(req, res, pathname) {
  const file = STATIC_FILES[pathname];
  if (!file || (req.method !== "GET" && req.method !== "HEAD")) {
    return sendError(res, 404, "Not found.");
  }
  fs.readFile(path.join(__dirname, file), (err, data) => {
    if (err) return sendError(res, 404, "Not found.");
    res.writeHead(200, {
      "content-type": MIME[path.extname(file)] || "application/octet-stream",
      "cache-control": "no-cache",
      "x-content-type-options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  });
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  try {
    if (pathname === "/api/status" && req.method === "GET") {
      return sendJson(res, 200, { live: LIVE });
    }

    if (pathname === "/api/metaphors" || pathname === "/api/story") {
      if (req.method !== "POST") return sendError(res, 405, "Use POST.");
      if (!LIVE) return sendError(res, 503, "Live stories are not turned on.");
      if (rateLimited(req.socket.remoteAddress || "unknown")) {
        return sendError(res, 429, "Slow down a little and try again soon.");
      }
      return pathname === "/api/story"
        ? await handleStory(req, res)
        : await handleMetaphors(req, res);
    }

    if (pathname.startsWith("/api/")) return sendError(res, 404, "Not found.");
    serveStatic(req, res, pathname);
  } catch (err) {
    if (res.headersSent) return res.destroy();
    const status = err.status || 500;
    if (status === 500) console.error(err);
    sendError(res, status, status === 500 ? "Something went wrong." : err.message);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Explain It My Way running at http://${HOST}:${PORT}`);
  console.log(
    LIVE
      ? `Live stories: ON (model ${MODEL})`
      : "Live stories: OFF (set ANTHROPIC_API_KEY to turn them on)",
  );
});
