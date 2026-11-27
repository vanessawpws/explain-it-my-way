# explain-it-my-way

Tech concepts explained through stories you already know. No jargon.

Pick a tech idea you have been nodding along to, pick a familiar story, and get a plain-English explanation with a cheat sheet that maps each part of the story to the real thing.

## Run it

Requires Node 20.12 or newer. There are no dependencies to install.

```sh
npm start
```

Then open http://localhost:3000.

The built-in concepts work with no setup. The app is also plain HTML, CSS, and JS, so you can open `index.html` directly, but live stories need the server.

### Turn on live stories (any topic)

Live stories let you type any tech idea and get suggested stories, then a story written on the fly. They use the Anthropic API, called from the server so your key is never exposed to the browser.

```sh
cp .env.example .env      # then put your key in ANTHROPIC_API_KEY
npm start
```

Or set it inline: `ANTHROPIC_API_KEY=sk-ant-... npm start`.

| Variable            | Default             | Purpose                                   |
| ------------------- | ------------------- | ----------------------------------------- |
| `ANTHROPIC_API_KEY` | (none)              | Turns on live stories                     |
| `ANTHROPIC_MODEL`   | `claude-sonnet-4-5` | Model used for live stories               |
| `PORT`              | `3000`              | Port to listen on                         |
| `HOST`              | `127.0.0.1`         | Interface to bind (local only by default) |

The server limits input size and allows 20 live requests per IP every 10 minutes. If you deploy it publicly, keep an eye on API usage.

## Project structure

| File         | What it does                                               |
| ------------ | ---------------------------------------------------------- |
| `index.html` | Page markup                                                |
| `styles.css` | Styling                                                    |
| `app.js`     | UI logic, Markdown rendering, live story streaming         |
| `data.js`    | The built-in concepts and stories                          |
| `art.js`     | Inline SVG stickers for each concept                       |
| `server.js`  | Static file server and the `/api/*` proxy for live stories |
| `writing/`   | Style guide and model answer that define the prose voice   |

### API (used by `app.js`)

- `GET /api/status` returns `{ "live": true | false }`
- `POST /api/metaphors` with `{ "concept" }` returns `{ name, plain, metaphors: [{ name, whyItFits }] }`
- `POST /api/story` with `{ concept, metaphor, whyItFits }` streams the story as Markdown

## Add a concept

Add an entry to `CONCEPTS` in `data.js`. Each concept has an `id`, `emoji`, `name`, a `plain` description, and a list of `metaphors`. Each metaphor has an `id`, a `name`, a one-line `whyItFits`, and a `doc`: the full explanation as Markdown, written in the voice described in `writing/style-guide.md`. Add a matching sticker for the concept `id` in `art.js` (it falls back to a generic one if missing).

Only `# `, `## `, `- ` bullets, plain paragraphs, and `**bold**` are rendered, so stick to those.

## Writing style

Every explanation follows [`writing/style-guide.md`](writing/style-guide.md), which was derived from the model answer in [`writing/example.md`](writing/example.md). The live story generator loads both files as its instructions, so editing them changes how every live story reads. Write new built-in stories to the same guide so they match.

## Link straight to a story

`?concept=<concept id>&story=<metaphor id>` opens that story directly, for example `/?concept=data-center&story=kitchen`.
