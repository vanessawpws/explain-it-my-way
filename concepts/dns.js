// DNS. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "dns",
  emoji: "\u{1F4D6}",
  name: "DNS",
  plain:
    "The internet's address book: it turns a name like example.com into the number a computer needs to connect.",
  metaphors: [
    {
      id: "phone-book",
      name: "A phone book",
      whyItFits:
        "A phone book matches a name you remember to a number you need, which is exactly what DNS does for websites.",
      doc: `# What Is DNS? Picture a Phone Book

Sometimes a website won't load and the error says "DNS." Tech people joke that it's always DNS. If you've never been told what it is, that joke goes right over your head.

This post fixes that. By the end, you'll know what DNS does, who keeps track of it, and why a problem with it can make a perfectly healthy website seem to disappear.

## A Wednesday morning story

It's 8 a.m. and you type a website's name into your browser. Computers can't connect to a name. They need a number, like 142.250.80.46, which tells them exactly where to go. Something has to translate the name you typed into the number a computer can use.

That something is DNS, and it works like a phone book. Let's walk through it.

![You type a name, DNS looks it up, a number comes back, and the website loads.](flow:You type a name|DNS looks it up|A number comes back|The site loads)

## The phone book

- **The website name is a person's name.** Easy for you to remember.
- **The IP address is the phone number.** It's what a computer needs to connect.
- **DNS is the phone book.** It matches each name to its number.

![Three parts of the phone book: a website name is a person's name, an IP address is a phone number, and DNS is the phone book.](map:A website name=A person's name|An IP address=A phone number|DNS=The phone book)

## Who keeps the phone book

There isn't one giant book in one place. There are millions of entries spread across computers around the world, run by many different organizations. When you look up a name, a helper does the searching for you. Most people use the one run by their internet provider, and some choose another.

## When a website moves

Say a business moves to a new building. It gets a new phone number, but its name stays the same. A website works that way too. It can move to a new computer with a new address, and the phone book is updated to match. You keep typing the same name. The update can take a while to spread, because copies of the old entry are saved in many places.

## When the phone book is wrong

If the lookup fails, the website might be running perfectly. You just can't find its number. It's like knowing the person is home but having a dead number in the book. That's why a DNS outage can make big websites seem to vanish for a few hours, even though nothing is wrong with them.

## The bottom line

DNS is the internet's phone book: you remember the name, and it finds the number. Next time a site won't load and the error mentions DNS, you'll know the person is probably home and the book is the problem.
`,
    },
    {
      id: "contacts-app",
      name: "The contacts app on your phone",
      whyItFits:
        "You tap a name and your phone finds the number. It also remembers numbers it has used before, just like DNS answers get saved.",
      doc: `# What Is DNS? Picture the Contacts App on Your Phone

Typing "google.com" feels simple. But the computers on the other end can't read it. They need a number. Something in the middle changes one into the other, and it does it in a fraction of a second, thousands of times a day.

This post meets that something. By the end, you'll know what DNS is, why it remembers answers, and why different people can get different numbers for the same name.

## A Thursday story

It's Thursday and you want to call your mom. You don't type her number. You tap "Mom," and your phone finds the number for you and places the call.

DNS does that for websites. You tap a name, and it finds the number. Let's walk through it.

![You tap a name, your phone looks it up, a number is found, and the call connects.](flow:You tap a name|Your phone looks it up|A number is found|The call connects)

## The contacts list

- **The contact name is a web address.** Something you can remember and type.
- **The saved number is the IP address.** The thing a computer actually dials.
- **The contacts list is DNS.** It holds the match between the two.

![Three parts of the contacts app: a web address is a contact name, an IP address is a phone number, and DNS is the contacts list.](map:A web address=A contact name|An IP address=A phone number|DNS=The contacts list)

## Why your phone remembers

The first time you look up a number, it takes a moment. After that, your phone remembers it. DNS does the same thing. Answers are saved for a while so the next visit is faster. They don't stay forever, though. Each saved answer has an expiry, so that when a website's number changes, the old one eventually gets replaced.

## When a friend changes numbers

Your friend gets a new number and you update their contact. You still tap the same name. When a website moves to a new computer, its DNS entry gets updated. People keep typing the same address, and nobody has to learn the new number.

## Different numbers for the same name

Big websites sometimes give you a different number depending on where you are. It's like a chain restaurant whose contact entry always rings the closest branch. That way your request goes to a nearby computer instead of one on the other side of the world.

## Where the contacts comparison stops

Your contacts list is private and belongs to you. DNS is shared by everyone and mostly public. Anyone can look up the number for a public website name.

## The bottom line

DNS is the contacts app for the whole internet: tap a name, get a number, and remember it for next time. Next time a site loads instantly on a second visit, you'll know your phone remembered the number.
`,
    },
    {
      id: "asking-directions",
      name: "Asking for directions in a new town",
      whyItFits:
        "No single person knows every address, so you ask one person who points you to the next, which mirrors how DNS passes a lookup through several levels.",
      doc: `# What Is DNS? Picture Asking for Directions in a New Town

When you type a website's name, an answer comes back so fast it seems like one computer knew everything. In fact, no computer does. The answer is pieced together in a few quick steps, and it works a lot like asking around in a town you've never visited.

This post follows those steps. By the end, you'll know why DNS is split into levels, who answers at each one, and why the second visit is faster than the first.

## A Friday afternoon story

It's Friday and you've just stepped off the train in a town you've never been to. You're looking for the Maple Street Bakery. You ask the attendant at the station. They don't know the bakery, but they say, "Shops are on Main Street. Ask at the information booth." At the booth, someone says, "Maple Street Bakery is at 12 Maple Street."

A DNS lookup works in steps like that. Let's walk through it.

![You ask the station, the root points you to the right section, that section points to the right server, and you get the number.](flow:You ask|The root points to .com|The .com list points onward|The site gives its number)

## The people you ask

- **Your helper is the resolver.** It's usually run by your internet provider, and it does the asking for you.
- **Each person you ask is a name server.** None of them knows everything. Each knows who to ask next.
- **The street address is the IP address.** The final answer that lets you walk to the door.

![Three parts of the directions: the resolver is your helper, a name server is someone you ask, and the IP address is the street address.](map:The resolver=Your helper|A name server=Someone you ask|The IP address=The street address)

## Why not one giant list

One list for the whole internet would be enormous, and it would change every second as websites come and go. If it ever broke, everything would break with it. Splitting the work into levels means each place only has to keep track of its own piece. The first level knows who handles each ending, like .com or .org. The next level knows who handles each name.

## Why the second visit is faster

After your helper finds the bakery once, it remembers. The next time you ask, it answers right away without walking back through the town. That saved answer is called a cache, and it's a big reason the internet feels quick.

## Where the directions comparison stops

A stranger might guess or misremember. A name server only answers from its own records, and it says so when it doesn't know. It's also a lot faster than a town. All of those steps usually take a few thousandths of a second.

## The bottom line

DNS is asking for directions in a town where nobody knows everything: each person points you to the next, until someone gives you the address. Next time a website loads in a blink, you'll know a quick chain of directions just got you there.
`,
    },
  ],
});
