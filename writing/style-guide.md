# Explain It My Way: writing style guide

This guide describes how every explanation on the site is written. It was derived from the example in `example.md`. The live story generator in `server.js` loads this file and `example.md` as its instructions, and the built-in stories in `data.js` follow it too.

## The reader

A smart, curious adult with no technical background. They keep seeing the term in the news or at work and nodding along. After five minutes they should be able to explain it to a friend and have an informed opinion of their own.

## Structure

Write each explanation in this order:

1. **Title.** `# What Is X? Picture a Y` where X is the concept and Y is the everyday thing it's compared to.
2. **The hook.** One short paragraph (2 to 4 sentences). Start with something the reader has actually run into: a headline, a work buzzword, a daily habit. Admit that most people don't know what's really going on. Never open with a definition.
3. **The promise.** One or two sentences: "By the end, you'll know..." followed by two or three concrete things the reader will understand.
4. **A story section.** Give it a heading that names a time or place ("A Friday night story"). Put the reader in one specific, ordinary moment ("It's 8 p.m. You sit down and press play"). Introduce the comparison with "works like" and commit to it. End the section with "Let's walk through it."
5. **The parts.** A short section that names the main pieces of the concept. Use three bullets, each led by a bold sentence that maps one piece of the comparison to one real piece: `- **Computers are the workers.** One sentence on what they do.` Follow with a paragraph that shows the pieces working together on the opening scene.
6. **Two to four more sections.** Each one answers a question the reader would naturally ask next (Why does it need so much power? What happens when it breaks? Isn't that just the cloud?). Use short, plain headings. If a buzzword sits right next to the concept, clear it up in its own section.
7. **The bottom line.** One paragraph. Restate the comparison in a sentence, then call back to the opening scene: "Next time you press play, you'll know where your order is being filled."

Aim for 450 to 700 words.

## Voice

- Talk to "you." Use contractions. "Let's" is fine, used sparingly.
- Plain words. If a technical term is needed, explain it in the same sentence.
- Short paragraphs of one to four sentences. Mix short sentences with medium ones.
- Concrete and physical. Prefer things the reader can picture or has felt: a warehouse, a conveyor belt, a laptop getting warm on your lap.
- Use small comparisons inside the big one: "like a manager pointing you to the shortest line," "like a flashlight in a blackout."
- Commit to the comparison. Use its vocabulary all the way through and never switch to a different comparison halfway.
- Keep the mapping honest and one-to-one. If a piece doesn't fit, say so plainly in its own short section instead of forcing it.
- Clear up myths with a flat, calm statement: "The cloud is not a place in the sky."
- A rhetorical question now and then is fine. Don't stack them.
- Inform, don't persuade. The goal is to help the reader judge for themselves. No hype, no scare tactics, no moralizing.

## Punctuation and words

- No em dashes, no semicolons. Use commas, colons, and periods.
- No exclamation marks and no emoji.
- Avoid filler and buzzwords: "delve," "landscape," "leverage," "seamless," "revolutionary," "in today's fast-paced world," "it's important to note."

## Markdown rules

Only these elements are supported by the site's renderer:

- `# ` for the title, `## ` for section headings (sentence case).
- `- ` for bullet lists.
- Plain paragraphs.
- `**bold**` for emphasis.

Do not use italics, numbered lists, tables, code blocks, links, or images.

## Before you finish, check

- Does it open with something the reader has actually seen, not a definition?
- Is there one specific scene with a time or place, and does the bottom line call back to it?
- Is every bold bullet a true one-to-one mapping?
- Would a smart friend with no tech background follow every sentence?
- Are there any em dashes, semicolons, or exclamation marks? Remove them.
