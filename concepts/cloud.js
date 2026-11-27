// The cloud. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "cloud",
  emoji: "\u2601\uFE0F",
  name: "The cloud",
  plain:
    "Using someone else's computers over the internet instead of owning your own.",
  metaphors: [
    {
      id: "power-company",
      name: "The power company",
      whyItFits:
        "You use electricity without owning a power plant, you pay for what you use, and you can use more on a busy day.",
      doc: `# What Is the Cloud? Picture the Power Company

You've heard it a thousand times. Your photos are in the cloud. Your work files are in the cloud. It all sounds like your stuff is floating somewhere overhead, and most of us have quietly stopped asking what that means.

This post asks. By the end, you'll know what the cloud is, what you're really paying for, and why so many companies moved to it.

## A lights-on story

It's 6 p.m. and you flip a switch. The lamp comes on. You didn't build a power plant, run the cables, or hire anyone to keep the generators spinning. You just use electricity and pay for what you used.

The cloud works like the power company, but for computing. Instead of owning the machines that run your apps, you use someone else's, over the internet. Let's walk through it.

![Your app asks for computing, the request crosses the internet, someone else's computers do the work, and the answer arrives.](flow:Your app asks|The internet|Someone else's computers|Your answer)

## The grid

- **Cloud companies are the power plants.** They own huge buildings full of computers, called data centers, so you don't have to.
- **The internet is the power lines.** It carries the computing from their building to your screen.
- **Your bill is the meter.** You pay for what you use, not for owning the equipment.

![Three parts of the grid: cloud companies are the power plants, the internet is the power lines, and your bill is the meter.](map:Cloud companies=Power plants|The internet=Power lines|Your bill=The meter)

## Why a company would switch

Before the cloud, a company that wanted a website had to buy its own computers, find a room for them, and hire people to babysit them. That's like running your own generator in the basement.

Now picture the day after Thanksgiving, when millions of people hit a store's website at once. Buying enough computers for that one day would be a waste the other 364. In the cloud, the store uses a lot more for a day, then scales back down. It's like turning on every light in the house for a party, then turning them off.

## Is the cloud a place?

There's no sky involved. The cloud is real computers in real buildings, owned by someone else. The name comes from old network diagrams, where engineers drew the internet as a fluffy cloud to mean "stuff out there we don't need to detail."

## Where the power company comparison stops

Electricity is the same everywhere. Your data isn't. It lives on specific computers owned by a specific company in a specific country, and that raises questions electricity never does: who can see it, where it's stored, and what happens if you want to leave.

## The bottom line

The cloud is the power company for computing. Someone else runs the plants, the lines carry it to you, and the meter charges you for what you use. Next time you tap "save to the cloud," you'll know you're flipping a switch on someone else's building.
`,
    },
    {
      id: "ride-share",
      name: "A ride-share app",
      whyItFits:
        "Instead of owning a car you call one when you need it, pay for the trip, and never worry about maintenance.",
      doc: `# What Is the Cloud? Picture a Ride-Share App

Your company "moved to the cloud." Your phone backs up to the cloud. Somewhere in the background, someone mentions the cloud costing too much. It's one of those words everyone uses and few people explain.

This post explains it. By the end, you'll know what the cloud is, why renting computers can beat owning them, and why cloud bills sometimes surprise people.

## A Saturday night story

It's 10 p.m. and you need to get across town. You don't own a car. You open an app, a car is matched to you, and a few minutes later you're on your way. When the ride ends, you pay for the trip and walk away. You never think about insurance, parking, or oil changes.

The cloud works like that for computers. You ask for computing power when you need it, and you hand it back when you're done. Let's walk through it.

![You ask for computing, a computer is assigned, your work runs, and you pay for the time.](flow:You ask for computing|A computer is assigned|Your work runs|You pay for the time)

## Owning versus renting

- **Owning a computer is owning a car.** You buy it, house it, and fix it, whether you use it or not.
- **Renting in the cloud is calling a ride.** You use a computer for the minutes you need it, then it goes back in the pool.
- **The cloud provider is the ride-share fleet.** They own the vehicles, keep them running, and send one when you ask.

![Three parts of the ride: buying servers is owning a car, renting in the cloud is calling a ride, and the provider is the fleet.](map:Buying servers=Owning a car|Renting in the cloud=Calling a ride|The provider=The fleet)

## When owning still wins

If you drive every day, owning a car can be cheaper than riding. The same is true for companies that run heavy workloads around the clock. Some of them buy their own computers, and many mix both. Renting is a bargain for uneven work and a bad deal for work that never stops.

## Surge pricing and surprise bills

Cloud bills run on a meter. If someone starts a big job and forgets about it, the meter keeps running, like a ride-share car waiting outside for hours. That's why companies track their cloud spending closely.

## Where the ride-share comparison stops

A ride ends and the car forgets you. The cloud doesn't. Your files and settings stay on the provider's computers after the ride is over. And while you can switch ride apps in seconds, moving a company's work from one cloud provider to another can take months.

## The bottom line

The cloud is a ride-share app for computers: call one when you need it, pay for the trip, skip the maintenance. Next time someone says "we moved to the cloud," you'll know they stopped owning the car.
`,
    },
    {
      id: "storage-unit",
      name: "A self-storage unit",
      whyItFits:
        "Your things live in a secure building run by someone else, you hold the key, you pay monthly, and you can get to them whenever you need.",
      doc: `# What Is the Cloud? Picture a Self-Storage Unit

Every phone asks you at some point: "Your storage is almost full. Upgrade to the cloud?" You tap yes without knowing what you just bought, or where your photos went.

This post follows them. By the end, you'll know where cloud storage actually lives, how only you can get in, and what happens if you stop paying.

## A garage story

It's Sunday afternoon and your garage is full. You rent a unit at a storage facility across town. Your boxes live there. You get a key, you pay every month, and you drive over when you need something.

Cloud storage works like that for your files. Let's walk through it.

![Your phone sends a file across the internet to the storage facility, and the file is kept safe there.](flow:Your phone|The internet|The storage facility|Your file kept safe)

## The facility

- **The facility is a data center.** A secure building full of computers, run by someone else.
- **Your unit is your slice of storage.** Only your account can open it.
- **The key is your password.** Anyone who has it can get in, so guard it.
- **The monthly rent is your subscription.** Free up to a small limit, then you pay for more space.

![Four parts of the storage unit: the data center is the facility, your account is your unit, your password is the key, and your subscription is the rent.](map:The data center=The facility|Your account=Your unit|Your password=The key|Your subscription=The monthly rent)

## Reaching it from anywhere

A real storage unit is across town. Cloud storage is reachable from any phone or laptop with an internet connection. It's like a storage unit that delivers whatever you ask for, wherever you're standing.

## What if the facility burns down

A good storage company doesn't want to lose your boxes, so it keeps copies of your files in more than one building. If a whole facility goes dark, another one still has your photos. That's something a real storage unit can't offer.

## What happens if you stop paying

Miss the rent for long enough and a real facility can empty your unit. Cloud providers do something similar: after a grace period, they can close an account and delete what's in it. The cloud is not the same as owning. For anything you can't replace, keep a second copy somewhere else.

## The bottom line

The cloud is a storage unit for your files: a secure building run by someone else, a key only you hold, and monthly rent. Next time your phone says your storage is full, you'll know it's asking you to rent a bigger unit.
`,
    },
  ],
});
