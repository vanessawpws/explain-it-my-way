// Blockchain. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "blockchain",
  emoji: "\u26D3\uFE0F",
  name: "Blockchain",
  plain:
    "A shared record book that many computers keep copies of, where new entries are added in order and old ones are very hard to change.",
  metaphors: [
    {
      id: "shared-notebook",
      name: "A shared notebook everyone copies",
      whyItFits:
        "Everyone keeps the same notebook, every new entry is announced to all, and a cheater would have to change most copies at once.",
      doc: `# What Is a Blockchain? Picture a Shared Notebook Everyone Copies

You've probably heard the word next to Bitcoin, or in a headline about tracking food or voting. It often comes with big promises. Underneath the hype is a fairly simple idea about who gets to keep the record of what happened.

This post explains that idea. By the end, you'll know what a blockchain is, why nobody can quietly change it, and what it costs to keep one.

## A friends and IOUs story

It's Saturday and a group of 100 friends lend each other money all the time. Who owes whom? Nobody wants one person to keep the only book, because that person could cheat, or lose it. So everyone keeps a copy of the same notebook. When a new IOU happens, it's announced to the whole group, and everyone writes it down.

That's a blockchain. Let's walk through it.

![A new IOU is announced, everyone checks it, everyone writes it down, and all the notebooks match.](flow:A new IOU is announced|Everyone checks it|Everyone writes it down|All notebooks match)

## The notebook

- **The notebook is the ledger.** A list of everything that happened, in order.
- **Each friend's copy is a node.** The computers on the network each hold the full record.
- **A page of entries is a block.** Entries are bundled into pages, and pages are added one after another, which is where the "chain" comes from.

![Three parts of the notebook: the ledger is the notebook, a node is a friend's copy, and a block is a page of entries.](map:The ledger=The notebook|A node=A friend's copy|A block=A page of entries)

## Why nobody can quietly cheat

Suppose one friend wants to change an old entry in their own copy. The other 99 copies still show the original. To pull off the change, they'd need to rewrite most of the notebooks at the same moment. When copies disagree, the version most of the group holds wins. That's what makes the record hard to rewrite.

## Who adds the next page?

The group needs a rule for deciding whose page is added next. Different blockchains use different rules, with names like mining and staking. What they share is the point: a rule that the whole network follows decides, and no single boss does.

## The cost

All that checking and copying is slow and uses a lot of computing power compared with one ordinary database. For many jobs, one trusted database is simpler and cheaper. A blockchain makes sense when a group of people who don't trust each other all need to agree on one record.

## The bottom line

A blockchain is a notebook that many people keep identical copies of, where every new entry is announced and old ones can't be quietly changed. Next time you see the word in a headline, you'll know the question is who keeps the notebook.
`,
    },
    {
      id: "sealed-letters",
      name: "A chain of sealed letters",
      whyItFits:
        "Each sealed letter refers to the seal of the one before it, so changing an old letter breaks every seal after it, which is how blocks are linked.",
      doc: `# What Is a Blockchain? Picture a Chain of Sealed Letters

People say a blockchain is "tamper-proof," and that word does a lot of heavy lifting. It isn't quite right. A blockchain is tamper-evident, which means you can tell if somebody tried. The reason has to do with how each page is tied to the page before it.

This post explains the tie. By the end, you'll know how blocks link together, what a hash is, and what a blockchain can and can't promise.

## A clerk's story

It's Tuesday and a clerk writes down the day's transactions on a page. She folds it into an envelope and seals it with a wax stamp that's unique to what's inside. The next day she writes a new page, but this time she also writes down the seal of yesterday's envelope. Then she seals that one too.

Each envelope points back to the one before it. Let's walk through it.

![You write a page, seal it with a fingerprint, put that fingerprint in the next page, and the chain grows.](flow:Write a page|Seal it|Copy the seal forward|The chain grows)

## The letters

- **A letter is a block.** One page of records.
- **The wax seal is a hash.** A short fingerprint made from the page. Change a single word and the fingerprint changes completely.
- **The note about the last seal is the link.** It ties each page to the one before it.

![Three parts of the letters: a block is a sealed letter, a hash is the wax seal, and the chain is each letter naming the seal before it.](map:A block=A sealed letter|A hash=The wax seal|The chain=Each letter naming the last seal)

## Tamper-evident, not tamper-proof

Say someone opens an old envelope and changes a number. The page no longer matches its seal. Worse, the next letter names the old seal, which doesn't match anymore either. And neither does the one after that. The break shows from that page onward, and everyone can see it.

That's the promise: the record can't be changed without being noticed. It doesn't promise the record was true to begin with. If a clerk writes down something false, the chain preserves it faithfully.

## Why there are many copies too

A very determined forger could, in theory, reseal every letter after the change. That's why blockchains are also shared among many people. The forger would have to redo the seals in most of the copies, and the honest ones would outvote them.

## Where the sealed letters comparison stops

A wax seal is a physical thing that an expert could imitate. A hash is made by math in a fraction of a second, and it's practically impossible to fake. Also, real clerks write one letter a day. A blockchain adds a page every few seconds or minutes, depending on the network.

## The bottom line

A blockchain is a chain of sealed letters, each one naming the seal before it, so changing the past breaks everything after it. Next time someone calls a blockchain unchangeable, you'll know it's better described as impossible to change in secret.
`,
    },
    {
      id: "group-chat",
      name: "A group chat everyone keeps a copy of",
      whyItFits:
        "A group chat is a shared history in a fixed order, and if someone altered a message on only their phone, everyone else would see it didn't match.",
      doc: `# What Is a Blockchain? Picture a Group Chat Everyone Keeps a Copy Of

"Who controls it?" is the first question people ask about a blockchain, and the answer sounds strange: nobody does. That's the whole point. It's easier to see how that can work if you start with something you use every day.

This post starts there. By the end, you'll know what a blockchain is, how it decides which version of history is right, and how it differs from the apps on your phone.

## A trip planning story

It's Friday night and a group chat is planning a trip. Every friend has the same messages on their phone, in the same order. If one friend edited a message on only their phone, it would no longer match anyone else's. Everyone could see something was off.

A blockchain works like that, with money or records instead of messages. Let's walk through it.

![Someone posts, everyone's phone receives it, the messages stay in order, and an edited copy no longer matches.](flow:Someone posts|Every phone receives it|Messages stay in order|An edit doesn't match)

## The chat

- **The chat history is the ledger.** A list of everything that was said, in order.
- **Each friend's phone is a node.** Every phone holds the full history.
- **The message order is the chain.** Each new entry goes at the end, after the ones before it.

![Three parts of the chat: the ledger is the chat history, a node is each friend's phone, and the chain is messages in order.](map:The ledger=The chat history|A node=Each friend's phone|The chain=Messages in order)

## Who decides what's true

Suppose ten phones are in the chat, and nine show one version of a message while one shows a different one. The nine win. The odd phone is the one that's wrong. A blockchain settles disagreements the same way. Most of the network decides, and that's called consensus.

## Where it differs from your chat

Your group chat runs on a company's servers. The company can delete messages, close your account, or change the rules. A blockchain has no company in the middle. Nobody can quietly delete an entry, and on many blockchains, anyone can join and run a copy.

## What it's used for

The best-known use is recording who owns digital money, as with Bitcoin. Some companies also use blockchains to track goods as they move around the world. A lot of other uses could be handled by an ordinary database. The real question is whether a group of people who don't trust each other need to share one record.

## The bottom line

A blockchain is a group chat that everyone keeps a copy of: the same entries in the same order, with no company in the middle deciding what's true. Next time a headline mentions one, you'll know it's a record that's kept by the crowd.
`,
    },
  ],
});
