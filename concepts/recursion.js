// Recursion. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "recursion",
  emoji: "\u{1F501}",
  name: "Recursion",
  plain:
    "Solving a problem by handing the same problem to a smaller copy of itself, until it's small enough to answer.",
  metaphors: [
    {
      id: "nesting-dolls",
      name: "Russian nesting dolls",
      whyItFits:
        "Each doll contains a smaller version of itself, you repeat one step on each, and there's a smallest doll where it stops.",
      doc: `# What Is Recursion? Picture Russian Nesting Dolls

Programmers love a certain joke: "To understand recursion, you must first understand recursion." It's a good joke because it's accurate. A recursive solution does call itself. The idea behind it is a lot friendlier than the joke.

This post explains it. By the end, you'll know what recursion is, why it needs a stopping point, and how an answer gets built on the way back.

## A rainy day story

It's a rainy Sunday and you've been given a set of nesting dolls. You wonder how many are in the set. You open the biggest one, and inside is a smaller doll, which has a smaller doll inside it, and so on.

Here's a rule for counting them: open the doll, count it as one, and then apply the same rule to the doll inside. Keep going until you hit one that doesn't open. That's recursion. Let's walk through it.

![You open a doll, count it, open the doll inside, and stop at the smallest one.](flow:Open a doll|Count it|Open the doll inside|Stop at the smallest)

## The set

- **Opening a doll is the repeated step.** The same action, each time.
- **The doll inside is a smaller version of the same problem.** Same job, less to do.
- **The smallest solid doll is the stopping point.** Programmers call it the base case.

![Three parts of the set: the repeated step is opening a doll, a smaller problem is the doll inside, and the base case is the smallest solid doll.](map:The repeated step=Opening a doll|A smaller problem=The doll inside|The base case=The smallest solid doll)

## Why the smallest doll matters

Imagine a set where the smallest doll could still be opened, with nothing to stop you. You'd keep opening forever. A program that forgets its stopping point does the same, until it runs out of room and crashes. The error is called a stack overflow, and it has its own website named after it.

## Adding it up on the way back

You don't know the total as you open the dolls. You only know it once you reach the end. The smallest doll counts as one. The doll around it adds one more, and so does each doll after that. The answer gets built as you work your way back out.

## Where the nesting dolls comparison stops

Each doll holds exactly one smaller doll. Recursion can be more generous than that. A problem might split into two or three smaller problems at once, like a doll that holds three dolls side by side.

## The bottom line

Recursion is a set of nesting dolls: do one small step, hand the same job to a smaller version of the problem, and stop at the smallest doll. Next time you hear "the function calls itself," you'll know it's opening the next doll.
`,
    },
    {
      id: "line-of-people",
      name: "Counting people in a line",
      whyItFits:
        "Each person can't see the front, so they ask the person ahead the same question, and the answers come back one by one, which is how recursive calls work.",
      doc: `# What Is Recursion? Picture Counting People in a Line

Some problems are much easier to solve if you let the problem solve itself. That's the whole idea behind recursion. It sounds like a riddle, but there's a perfectly ordinary version of it that happens in any long line.

This post walks through that line. By the end, you'll know what recursion is, how the answers travel back, and what it costs to wait on everyone ahead.

## A coffee line story

It's 5 p.m. and you're in a long line at a coffee shop. You want to know how many people are ahead of you, but you can't see the front. So you ask the person ahead: "How many people are in front of you?"

They can't see the front either, so they ask the person ahead of them. And so on. Finally, the person at the front says, "None." Then, one by one, each person adds themselves and passes the answer back. Let's walk through it.

![You ask the person ahead, they ask the next, the front says zero, and everyone adds one on the way back.](flow:Ask the person ahead|They ask the next|The front says zero|Everyone adds one)

## The line

- **Asking the person ahead is the recursive call.** The same question, with one fewer person in it.
- **The front of the line is the base case.** The one person who can answer without asking anyone.
- **Adding one on the way back is combining the answers.** Each person builds on the answer they were handed.

![Three parts of the line: a recursive call is asking the person ahead, the base case is the person at the front, and combining answers is adding one on the way back.](map:A recursive call=Asking the person ahead|The base case=The person at the front|Combining answers=Adding one on the way back)

## Everyone is waiting

Nobody can answer until the person ahead of them does. Everyone in the line is standing there holding an unfinished question. A computer keeps track of those waiting questions in a pile called the stack. If the line is too long, the stack runs out of room. That's a stack overflow.

## Why not just count?

You could walk the line yourself and count. That's a loop, and for a line it works fine. Recursion shines when the problem looks the same at every level, like a family tree, where each person has parents who each have parents. The rule is short, and it works at any depth.

## Where the line comparison stops

In a real line, people can take a long time to answer. A computer works through its line in a tiny fraction of a second. And while this line has one person ahead of each person, many recursive problems ask two or more questions at each step.

## The bottom line

Recursion is asking the person ahead the same question until someone at the front can answer, then adding up the answers on the way back. Next time you hear that a program "calls itself," you'll know it's asking the next person in line.
`,
    },
    {
      id: "folders",
      name: "Folders inside folders",
      whyItFits:
        "A folder contains files and more folders, and the same search rule works at every level until you run out of folders.",
      doc: `# What Is Recursion? Picture Folders Inside Folders

You've used recursion without knowing it. Every time you search your computer for a file, a program has to look in a folder, then in the folders inside it, then in the folders inside those. It's a perfect example of a problem that contains smaller copies of itself.

This post uses that example. By the end, you'll know what recursion is, why one short rule can handle any depth, and where else you've seen it.

## A Monday morning story

It's Monday and you're hunting for one file on your laptop. It could be in any folder, and folders hold more folders. You don't want to write a different search rule for every level. So you write one: look at every file in this folder, then for each folder inside it, do exactly the same thing.

That one rule is recursion. Let's walk through it.

![You open a folder, check its files, open each folder inside, and repeat until no folders are left.](flow:Open a folder|Check its files|Open each folder inside|Repeat until none left)

## The file system

- **A folder is the problem.** Search everything inside it.
- **A folder inside it is a smaller version of the same problem.** The same search, with less to cover.
- **A folder with no folders inside is the base case.** Check its files, and you're done with that branch.

![Three parts of the file system: the problem is a folder, a smaller problem is a folder inside it, and the base case is a folder with no folders inside.](map:The problem=A folder|A smaller problem=A folder inside it|The base case=A folder with no folders inside)

## One rule, any depth

The rule is the same whether the folders go three levels deep or three thousand. You don't have to know how deep they go ahead of time. That's why recursion is so good at nested things. A short rule does the work of a very long one.

## Where you've seen it

Spreading menus that open to more menus. Comment threads where replies have replies. A company chart where managers have managers. All of them have the same shape: a thing that holds smaller versions of itself.

## Where the folders comparison stops

You can search through folders without recursion. A program can use a loop and keep its own list of folders to visit. It just tends to be longer and harder to read. The recursive version is usually shorter, which is the main reason programmers choose it.

## The bottom line

Recursion is a search through folders inside folders: one rule, applied to each smaller piece, until a piece has nothing left inside. Next time you search your computer and a file pops up from the deepest folder, you'll know one rule did the digging.
`,
    },
  ],
});
