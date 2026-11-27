// Containers. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "containers",
  emoji: "\u{1F4E6}",
  name: "Containers (like Docker)",
  plain:
    "A sealed package that holds an app and everything it needs, so it runs the same way on any computer.",
  metaphors: [
    {
      id: "shipping-container",
      name: "A shipping container",
      whyItFits:
        "A standard steel box can hold anything, and ships, trains, and trucks move it without caring what's inside, which is the idea software containers copy.",
      doc: `# What Is a Container? Picture a Shipping Container

Developers have an old joke: "It works on my machine." It's funny because it's so often true. An app runs perfectly on one computer and breaks on the next. Containers were invented to end that joke.

This post explains them. By the end, you'll know what a container is, what problem it solves, and why so many companies package their software this way.

## A port story

It's Monday morning at a shipping port. Cranes lift identical steel boxes from a ship onto trucks and trains. The crane doesn't care what's inside. Furniture, bananas, or car parts, it's all the same box.

Before those boxes, loading a ship meant handling every item by hand, in every shape. Software had the same problem for years. A container works like a shipping container. Let's walk through it.

![You pack the app, seal the container, ship it anywhere, and open it to run.](flow:Pack the app|Seal the container|Ship it anywhere|Open and run)

## The port

- **The box is the container.** It holds the app plus everything the app needs to run.
- **The standard size is the standard format.** Any computer that understands the format can run it.
- **The ship and crane are the host computer.** They move and run boxes without caring what's inside.

![Three parts of the port: the container is the shipping container, the standard format is the standard size, and the host computer is the ship and crane.](map:The container=The shipping container|The standard format=The standard size|The host computer=The ship and crane)

## The problem it solves

An app usually depends on other software, and it often needs particular versions of it. One computer has version 3, another has version 4, and the app breaks on the second. A container packs the right versions inside with the app. It arrives with what it needs, and it behaves the same wherever it lands.

## Many boxes, one ship

A single computer can run many containers at once, each one sealed off from the others. Add one, remove one, or replace one, and the rest don't notice. If one app crashes, the others keep going. That's why large companies run thousands of containers across their computers.

## Where the shipping container comparison stops

A steel box is heavy and slow. A software container is a small file that starts in seconds. And a steel box just sits there, while a software container runs a program the moment it's opened.

## The bottom line

A container is a shipping container for software: a standard box that holds an app and everything it needs, so any computer can run it the same way. Next time someone says "we use Docker," you'll know they're loading boxes onto ships.
`,
    },
    {
      id: "meal-kit",
      name: "A meal kit",
      whyItFits:
        "A meal kit box holds the exact ingredients and a recipe card, so any kitchen can cook the same dinner without a trip to the store.",
      doc: `# What Is a Container? Picture a Meal Kit

If you've ever heard "we'll just put it in a container" in a meeting, you may have nodded along. It sounds like a storage thing. It's actually a way of making software behave the same on every computer, and it's easier to picture than you'd think.

This post paints the picture. By the end, you'll know what's inside a container, why it runs the same everywhere, and why throwing one away is a feature.

## A weeknight story

It's Wednesday at 6 p.m. and a box is waiting on your doorstep. Inside is everything for one dinner: measured ingredients and a recipe card. You don't need a trip to the store. Any kitchen can cook it, and it tastes the same.

A container works like that meal kit, for an app. Let's walk through it.

![You pack the ingredients and recipe, the box is delivered, any kitchen opens it, and the dinner comes out the same.](flow:Pack ingredients and recipe|Box is delivered|Any kitchen opens it|Same dinner every time)

## The kit

- **The box is the container.** Everything needed for one dish.
- **The ingredients are the app's dependencies.** The exact versions of other software the app expects.
- **The recipe card is the start-up steps.** It says how to put it all together and run it.
- **The kitchen is the host computer.** It supplies the stove and the counter, but not the ingredients.

![Four parts of the kit: the container is the box, dependencies are the ingredients, the start-up steps are the recipe card, and the host computer is your kitchen.](map:The container=The meal kit box|Dependencies=The ingredients|The start-up steps=The recipe card|The host computer=Your kitchen)

## Why it tastes the same everywhere

Without a kit, you'd shop for each ingredient. Your store might have a different brand than your friend's, and the dinner would turn out differently. The meal kit removes the guessing, because the ingredients travel with the recipe. A container does that for software. The right versions come along, so it doesn't matter what's already installed on the computer.

## Throwing it away is easy

After dinner, you toss the box. Containers are made to be thrown away and rebuilt. If one has a problem, you don't repair it. You throw it out and start a fresh one from the same kit. That makes problems easier to fix and cleaner to avoid.

## Where the meal kit comparison stops

A meal kit makes one dinner. A container can run as thousands of identical copies at once, which is how big apps handle crowds. And a kitchen still has to have the basics. A container can't run on a computer that lacks the underlying system it expects.

## The bottom line

A container is a meal kit for software: ingredients and recipe in one box, ready to cook in any kitchen. Next time a company says it can launch in minutes, you'll know it's opening a kit.
`,
    },
    {
      id: "shared-house",
      name: "Rooms in a shared house",
      whyItFits:
        "Containers each get a private space but share the building's kitchen and plumbing, unlike full virtual machines, which are like separate houses.",
      doc: `# What Is a Container? Picture Rooms in a Shared House

Cloud companies run an enormous number of apps on far fewer computers. That works because they can slice one computer into many private spaces. There are two main ways to do the slicing, and containers are the lighter one.

This post explains that difference. By the end, you'll know what a container is, why it starts so fast, and what it shares with its neighbors.

## A rental story

It's Friday and you're looking for a place to live. You could rent a whole house, with its own kitchen, plumbing, and front door. Or you could rent a room in a shared house. You'd get your own door and your own space, but you'd share the kitchen and the plumbing.

A container is a room. A whole house is what's called a virtual machine. Let's walk through it.

![You pick a room, move in your things, use the shared kitchen, and keep your own door closed.](flow:Pick a room|Move in your things|Use the shared kitchen|Keep your door closed)

## The house

- **A room is a container.** Your own space with your own things.
- **The shared kitchen and plumbing are the operating system.** One copy, used by everyone in the house.
- **The house is the host computer.** It's what all the rooms sit inside.

![Three parts of the house: a container is a room, the shared operating system is the shared kitchen and plumbing, and the host computer is the house.](map:A container=A room|The shared operating system=The shared kitchen and plumbing|The host computer=The house)

## Why moving in is fast

Renting a room means carrying in a few boxes. Renting a house means building a house. In the same way, a container starts in seconds because it only has to bring the app. A full virtual machine has to start a whole computer system first, which takes minutes and a lot more space.

## Thin walls

The rooms are separate, but the plumbing is shared. If something goes badly wrong with the shared parts, everyone in the house feels it. That's why containers are considered less sealed off from each other than full virtual machines, and why security teams pay attention to the shared parts.

## Where the shared house comparison stops

You can't copy a room. A container, though, can be copied a hundred times in seconds, and each copy gets its own space. That ability to multiply quickly is a big part of why containers took over.

## The bottom line

A container is a room in a shared house: your own door and your own things, sharing a kitchen with everyone else. Next time you hear that an app scaled up instantly, you'll know it just added more rooms.
`,
    },
  ],
});
