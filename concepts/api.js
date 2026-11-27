// APIs. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "api",
  emoji: "\u{1F50C}",
  name: "API",
  plain:
    "A set of rules that lets one program ask another program for something.",
  metaphors: [
    {
      id: "waiter",
      name: "A restaurant waiter",
      whyItFits:
        "The customer can't walk into the kitchen. A waiter takes a request in a known format, brings it to the kitchen, and carries the result back.",
      doc: `# What Is an API? Picture a Restaurant Waiter

You've seen the phrases. "Sign in with Google." "Powered by Maps." A developer says, "We'll just call their API." It all sounds important, and most of us have never had it explained.

This post explains it. By the end, you'll know what an API is, why programs need one to talk to each other, and what happens when a request goes wrong.

## A weather app story

It's 7 a.m. and you open a weather app. The app doesn't own any weather satellites. It has to ask a weather service for today's forecast. The way it asks is through an API.

An API works like a waiter at a restaurant. Let's walk through it.

![Your weather app asks the API, the API asks the weather service, and your forecast comes back.](flow:Your weather app|The API|The weather service|Your forecast)

## The dining room

- **The app is the customer.** It wants something, but it can't walk into the kitchen.
- **The API is the waiter.** It takes the request in a format the kitchen understands and brings the result back.
- **The service is the kitchen.** It does the real work, and the app never sees how.
- **The documentation is the menu.** It lists what you're allowed to ask for and how to ask.

![Four parts of the restaurant: the app is the customer, the API is the waiter, the service is the kitchen, and the documentation is the menu.](map:The app=The customer|The API=The waiter|The service=The kitchen|The documentation=The menu)

## Why the kitchen stays hidden

Customers don't wander into a kitchen and rearrange the shelves. The waiter is the only way in. That protects the kitchen, because the company decides exactly what can be ordered. It also means the kitchen can change its recipes or its equipment and customers never notice, as long as the menu stays the same.

## When the order goes wrong

Ask for something that's not on the menu, and the waiter says, "We don't have that." In an API, that comes back as an error, like the famous "404 not found." Order too fast, and the waiter asks you to slow down. Some kitchens also want a name on the reservation before they'll serve you. That's an API key, and it tells the service who is asking.

## Where the waiter comparison stops

A real waiter can chat, guess what you mean, and fix a mumbled order. An API can't. It only understands requests written exactly the way its documentation says, and it answers just as exactly.

## The bottom line

An API is a waiter between two programs: it takes the order in a known format, the kitchen does the work, and the result comes back to the table. Next time an app shows you live weather or a map, you'll know a waiter just made a round trip.
`,
    },
    {
      id: "wall-outlet",
      name: "A wall outlet",
      whyItFits:
        "A standard outlet shape means any device that fits can use the power, and the wiring behind the wall can change without anyone noticing.",
      doc: `# What Is an API? Picture a Wall Outlet

Apps connect to each other all day long. Your calendar talks to your email. Your shopping site talks to a payment company. Behind most of those connections is a thing called an API, and nobody ever says what it is.

This post says it. By the end, you'll know what an API is, why it has a fixed shape, and why changing it can break things.

## A hotel story

It's 9 p.m. in a hotel and your phone is at 3 percent. You look for an outlet. You don't care who built the wiring or where the power comes from. If your plug fits, you get power.

An API works like a standard wall outlet. Let's walk through it.

![Your device plugs into the outlet, the outlet connects to the building's wiring, and power arrives.](flow:Your device|The outlet|The building's wiring|Power arrives)

## The outlet

- **The outlet's shape is the API's rules.** Two prongs here, three there. Only the right shape fits.
- **The plug is the request.** Your device presents it in exactly the shape the outlet expects.
- **The wiring is the service behind it.** You never see it and never need to.

![Three parts of the outlet: the API's rules are the outlet's shape, a request is plugging in, and the service is the wiring in the walls.](map:The API's rules=The outlet's shape|A request=Plugging in|The service=The wiring in the walls)

## Why standard shapes matter

Because the shape is standard, any device can use any outlet. The same is true for an API. Once an app knows the rules, it can connect to any service that follows them. And the building can be rewired without you noticing, as long as the outlet stays the same.

## When the plug doesn't fit

Fly to another country and your plug doesn't fit. You need an adapter. Software uses adapters too. If a company changes the shape of its API, every app built for the old shape stops working until it's updated. That's why companies warn developers well before they change one.

## Where the outlet comparison stops

An outlet delivers one thing: power. An API can offer many different things, such as weather, maps, or payments, and each one needs its own kind of request. An outlet also never says no. An API can refuse a request that isn't allowed.

## The bottom line

An API is a wall outlet for software: a standard shape that lets any app plug into a service without knowing what's behind the wall. Next time one app works smoothly with another, you'll know the plug fit.
`,
    },
    {
      id: "vending-machine",
      name: "A vending machine",
      whyItFits:
        "A vending machine offers a fixed set of choices, wants the right input, and gives a predictable result, with a clear message when something is wrong.",
      doc: `# What Is an API? Picture a Vending Machine

"Just use their API." It's the kind of sentence that slides right past you at work. It sounds like a tool only developers could ever understand. It's simpler than it sounds.

This post makes it simple. By the end, you'll know what an API is, what it gives you, and why the answer it gives back is so predictable.

## A snack run story

It's 3 p.m. at the office and you walk to the vending machine. You press B4, insert your coins, and a bag of chips drops into the tray. You didn't talk to anyone. You have no idea how the machine works inside.

An API works like a vending machine. Let's walk through it.

![You press B4, the machine checks your request, the machine does the work, and your snack drops out.](flow:Press B4|Machine checks the request|Machine does the work|Snack drops out)

## The machine

- **The buttons are the requests you're allowed to make.** You pick from what's offered.
- **The coin slot is payment or a key.** Some APIs are free. Many want a key or payment before they answer.
- **The output tray is the response.** What you asked for comes back in a form you can predict.

![Three parts of the machine: the API's options are the buttons, payment or a key is the coin slot, and the response is the output tray.](map:The API's options=The buttons|Payment or a key=The coin slot|The response=The output tray)

## Same buttons, same result

B4 gives you chips every time. Developers rely on that. They build apps that press the same button and expect the same kind of answer. It's also why changing a button can break things. If B4 suddenly gives you a drink, every app that expected chips is now confused.

## When the machine says no

A vending machine has ways of telling you it can't help: a "sold out" light, a coin that won't go in, a button that does nothing. APIs reply with their own versions. "Not found." "Not allowed." "Try again later." These replies are short and exact, so a program can react to them.

## Where the vending machine comparison stops

A vending machine serves one person at a time and only hands over what's inside. An API serves thousands of requests at the same moment, and a request can make the service do real work, like charging a credit card or finding the fastest route.

## The bottom line

An API is a vending machine for programs: fixed buttons, a coin slot, and an answer that drops into the tray. Next time an app shows you something it couldn't have known by itself, you'll know a program just pressed a button.
`,
    },
  ],
});
