// Git. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "git",
  emoji: "\u{1F33F}",
  name: "Git",
  plain:
    "A tool that records every change to a project, so you can go back in time and work with others without overwriting each other.",
  metaphors: [
    {
      id: "save-points",
      name: "Save points in a video game",
      whyItFits:
        "You save before a hard part, go back if it goes wrong, and try risky strategies in a separate save slot, which is how Git works for code.",
      doc: `# What Is Git? Picture Save Points in a Video Game

If you work near software, you've heard the words: commit, branch, merge, push. Open source projects live on a site called GitHub. It all sounds like a secret language, and the secret is smaller than you think.

This post decodes it. By the end, you'll know what Git is, what a commit and a branch are, and why almost every software team depends on it.

## A Saturday night story

It's Saturday night and you're stuck on a hard level. Before the boss, you save. The boss wins, so you reload your save and try again. Nothing is lost, and you can attempt something bold because going back is easy.

Git gives people who write software that same power, for every file in a project. Let's walk through it.

![You make changes, save a snapshot, try something risky, and go back if it breaks.](flow:Make changes|Save a snapshot|Try something risky|Go back if it breaks)

## The save menu

- **A commit is a save point.** A snapshot of the whole project, with a short note about what changed.
- **The history is the list of saves.** Every one is kept, in order.
- **Going back is loading a save.** You can return to any point and carry on from there.

![Four parts of the save menu: a commit is a save point, the history is the list of saves, going back is loading a save, and a commit message is your note on the save.](map:A commit=A save point|The history=The list of saves|Going back=Loading a save|A commit message=Your note on the save)

## Trying risky things

Say you want to test a wild strategy without wrecking your main game. You make a new save slot and play it out there. In Git, that's a branch. If the strategy works, you bring the changes back into your main game. If it doesn't, you delete the slot and nothing else was touched.

## Why a team needs it

Now imagine five players sharing one game. Each one wants to try different things at the same time. Git lets each person work in their own slot, then combine the results into one game. It also keeps track of who changed what and why.

## Where the video game comparison stops

A game save usually overwrites the last one. Git keeps every snapshot, forever, so you can look at any moment in the project's life. And a game has one player at a time, while Git is built for many people to move forward together.

## The bottom line

Git is a set of save points for a project: every change is recorded, any moment can be reloaded, and risky ideas get their own slot. Next time a developer says "I'll just commit that," you'll know they're pressing save.
`,
    },
    {
      id: "recipe-book",
      name: "A shared family recipe book",
      whyItFits:
        "Everyone wants to tweak the recipes, so each person tries changes on their own copy and the family decides what goes back into the main book, which mirrors branches and merges.",
      doc: `# What Is Git? Picture a Shared Family Recipe Book

If you've ever seen a developer say "I pushed my branch" and "opened a pull request," you may have wondered what on earth they're talking about. It's a process humans already know. It's how a family handles a treasured recipe book.

This post shows the parallels. By the end, you'll know what a branch, a pull request, and a merge are, and why they keep teams from stepping on each other.

## A family reunion story

It's Sunday at a family reunion. Everyone wants to tweak Grandma's lasagna recipe. If all twenty people write in the one book, chaos follows. So each person makes a photocopy, tries their changes at home, and brings the result to the family. Together, they decide which changes go into the main book.

That's Git. Let's walk through it.

![You copy the book, make your edits, propose your changes, and the family adds them to the book.](flow:Copy the book|Make your edits|Propose your changes|Family adds them)

## The recipe book

- **The main book is the main branch.** The version everyone agrees is current.
- **Your photocopy is your own branch.** Safe to scribble on without ruining anything.
- **Proposing your edits is a pull request.** Others look at your changes before they go in.
- **Adding the edit to the book is a merge.** Your changes join the main version.

![Four parts of the recipe book: the main branch is the main book, your branch is your photocopy, a pull request is asking to add your changes, and a merge is adding the edit to the book.](map:The main branch=The main recipe book|Your branch=Your photocopy|A pull request=Asking to add your changes|A merge=Adding the edit to the book)

## When two people edit the same line

Two cousins both change "1 cup of sugar," one to half a cup and one to two cups. The book can't use both. Git doesn't guess. It flags the line as a conflict and asks a person to choose. Most of the time, edits are in different places and combine on their own. Conflicts are the exception.

## Who changed the lasagna?

Git remembers who changed each line, when, and the note they left. If the lasagna suddenly tastes strange, you can look at the history and see when the salt doubled. It's not about blame. It's about knowing what changed and why.

## Git and GitHub

Git is the system that tracks changes. GitHub is a website where people store their recipe books and share them. It's like the difference between a notebook and the shelf where the whole family keeps them.

## The bottom line

Git is a shared recipe book: everyone works on a copy, proposes changes, and the group decides what joins the main book. Next time a developer says "my pull request is up," you'll know they've handed the family a new idea for the lasagna.
`,
    },
    {
      id: "track-changes",
      name: "A group essay with track changes",
      whyItFits:
        "A group essay needs every edit recorded, combined, and reversible, which is exactly the job Git does for a project folder.",
      doc: `# What Is Git? Picture a Group Essay with Track Changes

Anyone who's worked on a group project has met this problem. Four people, one document, and a folder full of files named "final_v3_REAL_final.docx." Software teams ran into the same mess at a much bigger scale, and Git is how they solved it.

This post explains how. By the end, you'll know what Git does, what a repository is, and why teams can work on the same project without losing anyone's work.

## A Tuesday night story

It's Tuesday night and the essay is due tomorrow. Four people are editing, each in their own copy, emailing versions around. Nobody's sure which one is current, and one person's changes just got erased by another's.

Git is a better way to do this. Let's walk through it.

![Everyone edits their own copy, the changes are recorded, the changes are combined, and one final document comes out.](flow:Everyone edits a copy|Changes are recorded|Changes are combined|One final document)

## The essay folder

- **The repository is the essay and its full edit history.** One folder that remembers everything.
- **A commit is one tracked change.** It has a name, a note, and a time.
- **A merge is combining everyone's edits.** Changes from different people are brought into one document.

![Three parts of the essay folder: a repository is the essay and its edit history, a commit is one tracked change, and a merge is combining everyone's edits.](map:A repository=The essay and its edit history|A commit=One tracked change|A merge=Combining everyone's edits)

## No more final_v3

Because every change is in the history, you don't need a new copy of the file each time you edit. The history already holds every earlier version. Want the essay as it was on Monday at noon? You can get it back. That alone removes most of the folder clutter.

## Working offline

Each person keeps the full history on their own computer. You can edit on a plane, with no internet, and sync up later. Git then figures out how to combine your changes with everyone else's. If two people changed the same sentence, it asks a human to choose.

## Where track changes stops

Track changes works inside one document. Git is happiest with plain text, like code, where it can show exactly which line changed. With things like images or word processor files, it can store the versions, but it can't show you what changed inside them.

## The bottom line

Git is track changes for a whole project: every edit recorded, everyone's work combined, and any earlier version one command away. Next time you see a folder of "final_v3_REAL" files, you'll know what a developer would reach for.
`,
    },
  ],
});
