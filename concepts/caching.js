// Caching. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "caching",
  emoji: "\u26A1",
  name: "Caching",
  plain:
    "Keeping a copy of something close by so you don't have to fetch it from far away again.",
  metaphors: [
    {
      id: "fridge",
      name: "Your kitchen fridge",
      whyItFits:
        "The fridge is small, close, and fast, and it holds what you use most so you can skip the trip to the store.",
      doc: `# What Is Caching? Picture Your Kitchen Fridge

When a website acts strangely, the first advice is always the same: "Clear your cache." You do it, and it often works. Nobody ever says what a cache is, or why clearing it helps.

This post explains. By the end, you'll know what a cache is, why every computer has so many of them, and how one can quietly serve you old information.

## A cereal story

It's Sunday evening and you want milk for your cereal. You open the fridge, and there it is, five seconds. If the fridge were empty, you'd have to drive to the grocery store, 20 minutes there and 20 back.

Caching is keeping what you use most in the fridge, so you don't have to take the trip every time. Let's walk through it.

![You need milk, you check the fridge, you use it if it's there, and you go to the store if it isn't.](flow:You need milk|Check the fridge|Found, use it|Missing, go to the store)

## The kitchen

- **The fridge is the cache.** Small, close by, and fast.
- **The grocery store is the original source.** Big, far away, and slow to reach.
- **Finding milk in the fridge is a cache hit.** What you needed was already there.
- **Finding the fridge empty is a cache miss.** You make the trip, then stock the fridge for next time.

![Four parts of the kitchen: the cache is the fridge, the original source is the grocery store, a hit is milk in the fridge, and a miss is being out of milk.](map:The cache=The fridge|The original source=The grocery store|A cache hit=Milk in the fridge|A cache miss=Out of milk)

## Why not a bigger fridge

A fridge can only hold so much. When it's full, something has to go, and the sensible choice is whatever you haven't touched in the longest time. Caches follow the same rule. They keep the things you asked for recently and drop the things you haven't.

## When the milk goes bad

A saved copy can get out of date. The grocery store might have fresher milk, but the one in your fridge is still there. Websites tell caches how long they're allowed to keep a copy before checking again. That's why "clear your cache" fixes odd pages: it throws out the old milk and fetches fresh.

## Where you've already seen caching

Your browser saves the images from sites you visit, so they load faster next time. Video services keep popular shows on computers near your city, so they don't have to cross the world. Your phone keeps recent apps ready. It's fridges all the way down.

## The bottom line

Caching is a kitchen fridge for computers: a small, fast place for what you use most, so the long trip to the store is rare. Next time a page loads faster the second time, you'll know the milk was already in the fridge.
`,
    },
    {
      id: "coffee-pot",
      name: "A coffee shop's pot of coffee",
      whyItFits:
        "Brewing one cup at a time is slow, so shops brew a big pot ahead of time and serve the saved result, which is the heart of caching.",
      doc: `# What Is Caching? Picture a Coffee Shop's Pot of Coffee

When a popular website survives millions of people showing up at once, it isn't because it has millions of computers. It's usually because it's good at not doing the same work twice. That trick is called caching.

This post explains it. By the end, you'll know what caching is, why it saves so much effort, and why it comes with one catch.

## A morning rush story

It's 8 a.m. at a coffee shop. Nearly everyone orders "the regular coffee." If the barista brewed each cup from scratch, the line would stretch out the door. Instead, a big pot is brewed ahead of time, and each customer gets a pour in seconds.

A cache works like that pot. The slow work is done once, and the saved result is served again and again. Let's walk through it.

![A customer orders, the barista checks the pot, pours if there's coffee, and brews a fresh pot if there isn't.](flow:Customer orders|Is the pot ready|Yes, pour it|No, brew a fresh pot)

## The counter

- **The pot is the cache.** A saved result, ready to hand out.
- **Brewing a fresh pot is the slow work.** Building the answer from scratch.
- **The regular coffee is a popular request.** Caches pay off for things people ask for again and again.

![Four parts of the counter: the cache is the pot, the slow work is brewing a fresh pot, a popular request is the regular coffee, and stale data is coffee that sat too long.](map:The cache=The pot|The slow work=Brewing a fresh pot|A popular request=The regular coffee|Stale data=Coffee that sat too long)

## Coffee gets old

Coffee left on the burner too long tastes bad, so a good shop dumps the old pot and brews a new one after a while. Caches have the same kind of expiry. Each saved answer comes with a time limit, and after that it's thrown out and rebuilt. Too short, and you lose the benefit. Too long, and people get stale answers.

## The unusual order

Not everything gets a pot. If someone orders a special drink nobody else wants, the barista makes it to order. Caches work best on things many people ask for. Rare requests go through the slow way.

## Why websites do it

A news site's front page is requested by millions of people at once. If the site built it fresh for every visitor, its computers would be overwhelmed. Instead, it builds the page once and serves the saved copy for a minute or so. Everyone gets the front page, and the site does the work once.

## Where the coffee comparison stops

Old coffee tastes bad, so you know. A saved answer can be out of date and look exactly the same as a fresh one. That's the catch with caching, and the reason developers argue about when to throw a copy out.

## The bottom line

Caching is a pot of coffee brewed ahead of the rush: do the slow work once, serve the result many times, and brew a fresh pot when it gets stale. Next time a busy website stays fast, you'll know it's pouring from a pot.
`,
    },
    {
      id: "sticky-note",
      name: "A sticky note on your monitor",
      whyItFits:
        "A sticky note holds a fact you looked up so you don't have to look it up again, it has little room, and it can go out of date.",
      doc: `# What Is Caching? Picture a Sticky Note on Your Monitor

Computers feel fast, and a lot of that speed is a trick. They aren't always quick at finding things. They're quick at remembering what they just found. That memory trick is called caching, and it runs at every layer of a computer.

This post shows the trick. By the end, you'll know what a cache is, what happens when it fills up, and what goes wrong when the information changes.

## A desk story

It's Thursday and you need a coworker's phone extension. Looking it up in the company directory takes two minutes. The third time you look it up, you write the number on a sticky note and put it on your monitor. Now it takes a glance.

That sticky note is a cache. Let's walk through it.

![You need the number, you check the sticky note, you use it if it's there, and you look it up if it isn't.](flow:You need the number|Check the sticky note|Found, use it|Missing, look it up)

## The desk

- **The sticky note is the cache.** A copy, close at hand.
- **The company directory is the original source.** Complete, but slow to search.
- **Writing the number down is saving a copy.** You only do it for what you use often.

![Three parts of the desk: the cache is the sticky note, the original source is the company directory, and saving a copy is writing the number down.](map:The cache=The sticky note|The original source=The company directory|Saving a copy=Writing the number down)

## Notes run out of room

Your monitor is only so big. When it's covered in notes, you peel off the one you haven't used in the longest time. Computers do exactly that. It's a rule called "least recently used," and it keeps the cache full of what's most likely to be needed again.

## When the number changes

Your coworker moves desks and gets a new extension. The sticky note is now wrong, and you call the wrong person. This is the main risk of caching: a saved copy can fall behind the real thing. To fix it, you check the directory once in a while, or someone tells you when it changed.

## Layers of notes

You also have a cache inside your head. You remember a few numbers by heart, then you have the sticky notes, and then the directory. Computers stack caches the same way. The chip keeps a small fast cache, memory holds a bigger one, the disk holds a bigger one still, and the internet is the directory at the very end.

## The bottom line

Caching is a sticky note on your monitor: copy what you look up often, keep it close, and throw out the oldest when you run out of room. Next time a computer feels quick, you'll know it's mostly reading its own notes.
`,
    },
  ],
});
