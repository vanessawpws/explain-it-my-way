# explain-it-my-way

Tech concepts explained through everyday comparisons you already know. No jargon.

Pick a tech idea you have been nodding along to, pick a familiar comparison, and get a plain-English explanation with diagrams that map each part of the comparison to the real thing. Not sure where to start? Hit "Surprise me."

There are 13 built-in concepts, each explained three ways: data center, machine learning, large language models, encryption, the cloud, APIs, databases, DNS, caching, containers, Git, recursion, and blockchain.

## Run it

Requires Node 20.12 or newer. There are no dependencies to install.

```sh
npm start
```

Then open http://localhost:3000.

The built-in concepts work with no setup. The app is also plain HTML, CSS, and JS, so you can open `index.html` directly, but live mode needs the server.

### Turn on live mode

Live mode adds two things, both written on the fly by the Anthropic API:

- **Any topic.** Choose "Something else...", type any tech idea, get suggested comparisons, then a fresh explanation.
- **Written for a specific reader.** A "Who is this for?" picker appears: a curious adult (the default), a kid, a manager, or someone technical. Pick anyone but the default and even built-in concepts are generated fresh for that reader.

The API is called from the server, so your key is never exposed to the browser.

```sh
cp .env.example .env      # then put your key in ANTHROPIC_API_KEY
npm start
```

Or set it inline: `ANTHROPIC_API_KEY=sk-ant-... npm start`.

| Variable            | Default             | Purpose                                   |
| ------------------- | ------------------- | ----------------------------------------- |
| `ANTHROPIC_API_KEY` | (none)              | Turns on live mode                        |
| `ANTHROPIC_MODEL`   | `claude-sonnet-4-5` | Model used for live mode                  |
| `PORT`              | `3000`              | Port to listen on                         |
| `HOST`              | `127.0.0.1`         | Interface to bind (local only by default) |

The server limits input size and allows 20 live requests per IP every 10 minutes. If you deploy it publicly, keep an eye on API usage.

## Project structure

| File         | What it does                                               |
| ------------ | ---------------------------------------------------------- |
| `index.html` | Page markup                                                |
| `styles.css` | Styling                                                    |
| `app.js`     | UI logic, Markdown and diagram rendering, live streaming   |
| `data.js`    | The first four built-in concepts                           |
| `concepts/`  | One file per additional concept (`CONCEPTS.push({...})`)   |
| `art.js`     | Inline SVG stickers for each concept                       |
| `server.js`  | Static file server and the `/api/*` proxy for live mode    |
| `writing/`   | Style guide and model answer that define the prose voice   |

### API (used by `app.js`)

- `GET /api/status` returns `{ "live": true | false }`
- `POST /api/metaphors` with `{ "concept" }` returns `{ name, plain, metaphors: [{ name, whyItFits }] }`
- `POST /api/story` with `{ concept, metaphor, whyItFits, audience? }` streams the explanation as Markdown. `audience` is optional: `kid`, `manager`, or `technical`.

## Add a concept

1. Create `concepts/<id>.js` that calls `CONCEPTS.push({ ... })` (copy any existing file in `concepts/`). Each concept has an `id`, `emoji`, `name`, a `plain` description, and a list of `metaphors`. Each metaphor has an `id`, a `name`, a one-line `whyItFits`, and a `doc`: the full explanation as Markdown, written in the voice described in `writing/style-guide.md`.
2. Add `<script src="concepts/<id>.js"></script>` to `index.html`, after `data.js`.
3. Optionally add a sticker for the concept `id` in `art.js` (it falls back to a generic one if missing).

Only `# `, `## `, `- ` bullets, plain paragraphs, `**bold**`, and diagram lines are rendered, so stick to those.

### Diagrams

Put a diagram on its own line:

```md
![Caption](flow:Step one|Step two|Step three)
![Caption](map:Real thing=Comparison|Another real thing=Another comparison)
```

`flow:` draws boxes joined by arrows. `map:` draws a two-column table pairing each real part with its comparison. Both render in built-in and live explanations, and both are exported as plain text when you copy or download. Image files placed in `images/` can be referenced as `![Caption](images/name.svg)`.

## Writing style

Every explanation follows [`writing/style-guide.md`](writing/style-guide.md), which was derived from the model answer in [`writing/example.md`](writing/example.md). The live generator loads both files as its instructions, so editing them changes how every live explanation reads. Write new built-in explanations to the same guide so they match.

## Link straight to a story

`?concept=<concept id>&story=<metaphor id>` opens that story directly, for example `/?concept=data-center&story=kitchen`.
