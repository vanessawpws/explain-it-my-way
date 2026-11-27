// Each concept has a few comparisons, chosen because they match how the concept really works.
// Each comparison has a `doc`: a full explanation written as Markdown in the voice
// described in writing/style-guide.md (with writing/example.md as the model answer).
//
// This file holds the first concepts. Newer ones live one per file in concepts/
// and add themselves with CONCEPTS.push({...}). To add a concept, copy one of those
// files, then add its <script> tag to index.html (after data.js) and an optional
// sticker in art.js. No other code changes are needed.
//
// Doc rules: only "# ", "## ", "- ", plain paragraphs, **bold**, and flow:/map:
// diagram lines are rendered. Don't use backticks or ${ inside a doc, since docs
// are JavaScript template strings.

const CONCEPTS = [
  {
    id: "data-center",
    emoji: "\u{1F3E2}",
    name: "Data center",
    plain:
      "A giant building full of computers that run the apps and websites you use.",
    metaphors: [
      {
        id: "kitchen",
        name: "A restaurant kitchen",
        whyItFits:
          "Orders arrive, many cooks work at once, ingredients are stored, heat has to be managed, and the kitchen keeps going if a stove breaks.",
        doc: `# What Is a Data Center? Picture a Restaurant Kitchen

You use one every day and you've never seen it. Every video you stream, every photo you back up, and every question you type into a chatbot gets handled in a data center. They're also in the news and on town meeting agendas, because they're big and they use a lot of power.

This post explains what's inside one. By the end, you'll know what a data center does, how it's laid out, and why it needs so much electricity and cooling.

## A dinner rush story

It's 7 p.m. and you ask a chatbot for a dinner idea. Your phone doesn't know the answer. It sends your question across the internet like an order slip: "One dinner idea, please."

That slip lands in a data center, which works like a restaurant kitchen at the busiest hour of the night. The difference is that this kitchen never has a slow night. Let's walk through it.

![An order slip travels from your phone through the internet to the data center kitchen, and the answer comes back.](flow:Your phone|The internet|Data center kitchen|Your answer)

## The kitchen

A data center is a large building full of powerful computers with no screen or keyboard. They only do work for other people.

- **Computers are the cooks.** Rows and rows of them, each handling a piece of your order at the same time.
- **Storage is the pantry.** Drives hold your photos, videos, messages, and websites until someone asks for them. Unlike real ingredients, nothing gets used up: your photo is still on the shelf after it's been served.
- **The network is the order window.** Cables carry your request in and the finished dish back out.

![Three parts of the kitchen: computers are the cooks, storage is the pantry, and the network is the order window.](map:Computers=The cooks|Storage=The pantry|The network=The order window)

At the pass, a head chef sends your slip to a cook who isn't busy, like a host seating you at an empty table. Within a blink, your answer is plated and on its way to your phone. Thousands of other orders are being cooked at the same moment.

## Why the kitchen is so hot

Anyone who has worked a restaurant line knows the heat. Computers make heat too. Nearly all the electricity they use turns into warmth, and hot chips slow down or break.

So a data center has the equivalent of giant exhaust hoods. Cold air is blown in at the front of the racks of computers, and hot air is pulled out the back and carried outside. Some newer designs pipe liquid right up to the chips, because liquid carries heat away better than air.

![Cold air is blown in the front of the racks of computers, and hot air is pulled out the back and carried outside.](flow:Cold air in the front|Computers|Hot air out the back|Outside)

## The kitchen never closes

A restaurant that loses power can't serve dinner. A data center can't afford that, so it plans for trouble:

- **Power.** If the electricity from the grid fails, batteries take over instantly, like the emergency lights that flick on in a theater. Then the building's own diesel generators start up and can run for days.
- **Spare stoves.** Operators keep extra machines on hand so one broken part never stops the kitchen.
- **A sister restaurant.** Important information is copied to other buildings, so if one location floods or goes dark, another keeps serving.

## Where the kitchen comparison stops

A real kitchen cooks one dish at a time per cook, and it's the same menu for everyone. A data center's computers can also work things out on the spot, like writing a chatbot's reply, which is closer to a cook inventing a new dish for each order.

## The bottom line

A data center is a restaurant kitchen for information. Computers cook the orders, drives are the pantry, cables are the order window, and the building's biggest jobs are keeping the power on and the heat out. Next time you ask a chatbot a question, you'll know where the order slip went.
`,
      },
      {
        id: "library",
        name: "A giant library",
        whyItFits:
          "It holds a huge amount of organized information, has a front desk that fetches what you ask for, and keeps copies of precious items elsewhere.",
        doc: `# What Is a Data Center? Picture a Library That Never Closes

Scroll back through your photos and a picture from five years ago shows up instantly. Open an old email and there it is. It happens so fast that you never wonder where all of it is kept. The answer is a data center, and more of them are going up near towns, which is why people are starting to ask what they are.

This post fixes the mystery. By the end, you'll know what a data center holds, how it finds what you ask for, and why it takes so much to keep one running.

## A Sunday afternoon story

It's 3 p.m. on a Sunday and you want to show a friend a photo from a trip two summers ago. If you back up your photos online, the full-size picture may not be on your phone at all. So your phone sends a request across the internet, like handing a slip to a librarian: "The beach photo from two summers ago, please."

That slip lands in a data center, which works like a giant library that never closes and has more shelves than you could ever walk. Let's walk through it.

![A request slip travels from your phone through the internet to the data center library, and the photo comes back.](flow:Your phone|The internet|Data center library|Your photo)

## The library

A data center is a large building full of powerful computers and storage. Nobody browses it. It only fills requests.

- **Storage is the shelves.** Row after row of drives hold photos, videos, messages, and websites.
- **Computers are the librarians.** They take your slip, find the item, and bring it back. Many work at once, so nobody waits in line.
- **The network is the front desk and the book chute.** Requests come in and answers go out over cables.

![Three parts of the library: storage is the shelves, computers are the librarians, and the network is the front desk.](map:Storage=The shelves|Computers=The librarians|The network=The front desk)

A good library doesn't make librarians wander the stacks. It keeps a catalog that says exactly where each item sits. A data center keeps its own index, which is how it finds one photo among billions in a blink.

## More than a lending desk

A normal library only hands out what's on its shelves. A data center does that, but its computers can also work things out on the spot, like writing a chatbot's reply. That's closer to a librarian who can write a brand-new book on request.

## Protecting the collection

Libraries control the temperature and dampness to keep old books from falling apart. Data centers fight a similar enemy, which is heat. Nearly all the electricity computers use turns into warmth, and hot chips slow down or break, so the building runs big cooling systems around the clock.

Then there's the spare copy. A smart library keeps copies of its rarest books at another branch, so one flood doesn't erase them. A data center does the same with important information, storing copies in more than one building. It also keeps batteries and diesel generators ready, so a power cut doesn't close the doors.

![If the power grid fails, batteries take over first, then diesel generators.](flow:Power grid|Batteries|Diesel generators)

## The bottom line

A data center is a library for information. Drives are the shelves, computers are the librarians, cables are the front desk, and the building's biggest jobs are keeping the collection cool and safe. Next time a photo from years ago pops up in a blink, you'll know a very fast librarian just brought it to you.
`,
      },
      {
        id: "apartment",
        name: "An apartment building",
        whyItFits:
          "Many different tenants share one building and its utilities, with security at the door and a crew keeping the lights on.",
        doc: `# What Is a Data Center? Picture an Apartment Building for Computers

You can walk past a data center every day and never notice it. From the outside it's often a plain, windowless box with fans on the roof. Yet it's where the apps you rely on actually run, and it's the thing people are arguing about when a new one is proposed nearby.

This post opens the door. By the end, you'll know who uses a data center, what keeps it running, and why it needs so much power.

## A Tuesday morning story

It's 9 a.m. You check your bank balance, open your kid's school app, and order bread from a local bakery's website. Three different companies, three different services. Chances are their computers all live in the same kind of building, and none of those companies built it.

A data center works like an apartment building where the tenants are companies and the residents are computers. Let's walk through it.

![The parts of the apartment building: companies are the tenants, their computers are the residents, and the data center is the building.](map:Companies=The tenants|Their computers=The residents|The data center=The building)

## The building

A data center is a large building divided into spaces that companies rent and fill with their own computers.

- **The apartments are the companies' spaces.** Each company sets up its own computers, which run its own apps and websites.
- **The doorman is security.** Careful checks at the door decide who gets in.
- **The utilities are power and cooling.** Every apartment needs a steady supply of electricity, and every apartment's heat has to be carried away.

Out front is the road: the connection to the internet that everything travels in and out on.

## The superintendent

When a lightbulb goes out or a pipe leaks, someone on the maintenance team fixes it, often before the tenants notice. A data center has teams and monitoring systems watching the equipment around the clock. When a part fails, they swap it out before your app so much as hiccups.

## When the power goes out

A well-built building has emergency lights and a backup generator so the elevator and the fire alarms keep working. A data center has the same idea at a much bigger scale. Batteries take over the instant the power fails, then diesel generators start up and can run for days.

![When the grid fails, batteries take over instantly and diesel generators start up next.](flow:Power grid fails|Batteries take over|Generators start|Power keeps flowing)

## The neighbors are always on the phone

Real tenants mostly keep to themselves. The computers in a data center don't. They're constantly talking to each other and to the outside world, so it's more like an apartment building where everyone is on a phone call all day. That's also why the utilities are such a big deal: all those conversations take electricity, and all that electricity ends up as heat.

## The bottom line

A data center is an apartment building for computers. Companies rent the spaces, security guards the door, and the building's biggest jobs are supplying power and removing heat while a crew keeps everything working. Next time you pass a plain, windowless building with fans on the roof, you'll know it might be someone's very busy apartment complex.
`,
      },
    ],
  },

  {
    id: "machine-learning",
    emoji: "\u{1F331}",
    name: "Machine learning",
    plain:
      "Computers that learn patterns from examples instead of following step-by-step instructions.",
    metaphors: [
      {
        id: "child",
        name: "A child learning animals",
        whyItFits:
          "A child learns from many examples, gets corrected, improves, and then recognizes animals she has never met. That is the heart of machine learning.",
        doc: `# What Is Machine Learning? Picture a Toddler Learning What a Dog Is

Your phone sorts your photos by who's in them. Your email knows which messages are spam. A streaming service guesses what you'll want to watch next. Nobody sat down and wrote a rule for each of those. The computer learned, and that's machine learning, the idea behind most of what people call AI.

This post explains how. By the end, you'll know how a computer learns from examples, why it sometimes gets things wrong, and why the examples it learns from matter so much.

## A park bench story

It's Saturday morning at the park. A toddler sits in her stroller as a dog trots by. "Dog," says her dad. A cat on a wall: "Cat." Another dog: "Dog." Nobody hands her a rulebook.

You could try to write one. A dog has four legs, a tail, and fur. But so does a cat. So instead, you point and name, over and over, until it clicks. Machine learning works the same way. Let's walk through it.

![The toddler sees an animal, guesses a name, gets corrected, and tries again.](flow:See an animal|Guess a name|Get corrected|Try again)

## How the toddler learns

- **Pointing and naming is training.** Each animal comes with the right answer attached. Computers call these labeled examples.
- **The toddler's feel for "dog" is the model.** After enough animals, she isn't remembering each one. She has a sense of the ears, the shape, and the way it moves. No one wrote that down as a rule.
- **Corrections are feedback.** When she points at a cat and says "dog," her dad says, "Nope, that's a cat." Each correction nudges what she pays attention to next time.

Computers learn in the same loop: guess, get told how wrong the guess was, adjust a little, and try again.

![Three parts of learning: labeled examples are pointing and naming, the model is her feel for dogs, and feedback is the corrections.](map:Labeled examples=Pointing and naming|The model=Her feel for dogs|Feedback=The corrections)

## A dog she has never met

Here's the whole point. Show her a breed she has never seen, and she still says "dog." The skill works on new things, not just on ones she has already seen.

That's what your phone is doing when it spots a friend's face in a photo you took this morning. It never saw that exact picture in training. It learned the pattern.

## The grass mistake

Suppose every dog the toddler ever saw was standing on grass. She might decide that grass means dog. Computers fall into the same trap when their examples are lopsided.

That's why people who build these systems spend so much time choosing examples. It's also why you'll hear about AI being biased. The examples it learned from were.

## Where the toddler has the edge

A toddler knows a dog is alive, that it can be petted, and that it might bark. A computer only picks up patterns in the examples it saw, with no understanding behind them. It also usually needs thousands or millions of examples where a toddler needs a handful.

## The bottom line

Machine learning is a computer learning the way a toddler learns what a dog is: lots of examples, lots of corrections, and a feel for the pattern that works on new things. Next time your phone sorts your photos, you'll know it's a very patient toddler who has looked at a great many pictures, and who sometimes mistakes a cat for a dog.
`,
      },
      {
        id: "chef",
        name: "A chef perfecting a recipe",
        whyItFits:
          "Cook, taste, adjust a little, and repeat. This mirrors the way a machine learning system is trained.",
        doc: `# What Is Machine Learning? Picture a Chef Tasting the Soup

You've probably heard that an AI was "trained" on something. Trained how? Nobody ever explains, so you nod and move on. It's less mysterious than it sounds. It's a lot like learning a recipe: cook, taste, adjust, repeat.

This post walks through it. By the end, you'll know what "training" actually means, why it takes so many rounds, and how people check that it worked.

## A kitchen story

It's 6 p.m. and you're trying to make a soup you once had at a restaurant. You don't have the recipe. You throw in some salt, some herbs, a few vegetables, and taste it. It's terrible.

So you try again. A little less salt, a little more herbs. Still not right. Machine learning works a lot like this. Let's walk through it.

![The chef cooks a batch, tastes it, adjusts a little, and cooks again.](flow:Cook a batch|Taste it|Adjust a little|Cook again)

## The soup, step by step

- **The first random soup is an untrained model.** The computer starts with its settings set more or less at random, so its first answers are bad.
- **Tasting is checking against the right answer.** You compare your soup to the one you're aiming for and notice how far off it is. The computer compares its answer to the correct one and measures how wrong it is.
- **A pinch more or less is a small adjustment.** Nobody throws out the recipe and starts over. They nudge it. The computer makes tiny changes to its settings, in whichever direction makes the answer a little less wrong.

## Thousands of batches

One tweak doesn't do much. But after hundreds of batches, the soup gets remarkably good. That repetition is what "training" means: many rounds of try, check, and adjust. A computer can do thousands of rounds in the time it takes you to make one pot.

![Three parts of training: the model's settings are the recipe, checking the answer is tasting, and training rounds are batches of soup.](map:The model's settings=The recipe|Checking the answer=Tasting|Training rounds=Batches of soup)

## Serving a new guest

At last you serve the soup to someone who never helped you test it. If they love it, the recipe works. People check a trained computer the same way: they test it on examples it has never seen. It's one thing to do well on practice, and another to do well on new cases.

## Where the chef has the edge

A chef has a tongue, knows why the soup is bland, and can explain a change. A machine learning system adjusts a huge number of tiny settings automatically, often millions or billions of them, and usually can't say why a particular combination works. That's why it can be hard to explain a computer's mistakes.

## The bottom line

Machine learning is a chef tasting the soup over and over until it's right. Try, check how far off it is, nudge a little, repeat, and then serve it to someone new. Next time a streaming service seems to know what you want to watch, you'll know there's a chef behind it who has tasted an enormous number of batches.
`,
      },
      {
        id: "mail",
        name: "A new mail sorter",
        whyItFits:
          "A new postal worker learns to read messy handwriting by seeing thousands of letters and being corrected, then handles handwriting they have never seen.",
        doc: `# What Is Machine Learning? Picture a New Mail Sorter

You can deposit a check by taking a photo of it with your phone. Somewhere, a program reads the handwriting on it, and it has never seen your handwriting before. How does it manage that?

This post explains. By the end, you'll know how a computer learns to read things it has never seen, where it goes wrong, and why a huge pile of examples is the secret ingredient.

## A first day story

It's your first day at the post office. A mountain of envelopes sits in front of you, written in a thousand different handwriting styles. Nobody gives you a rule for reading every scrawl. Instead, they hand you a huge pile of envelopes with the correct address written on the back.

You guess at each one, flip it over, and see if you were right. Machine learning works the same way. Let's walk through it.

![The sorter starts with a pile of envelopes, guesses each address, flips the envelope to check, and eventually reads at a glance.](flow:Pile of envelopes|Guess the address|Flip to check|Read at a glance)

## The sorting room

- **The pile of envelopes with answers on the back is the training examples.** The computer starts with a huge pile of examples, each with the right answer attached.
- **Flipping the envelope is checking a guess.** The computer compares its guess to the right answer. When it's wrong, it adjusts.
- **Reading at a glance is the model.** After a few thousand letters you stop reading letter by letter. You recognize shapes at a glance. That quick sense is the pattern the computer has learned.

![Three parts of the sorting room: training examples are envelopes with answers, checking a guess is flipping the envelope, and the model is reading at a glance.](map:Training examples=Envelopes with answers|Checking a guess=Flipping the envelope|The model=Reading at a glance)

## A stranger's handwriting

Then a letter arrives in handwriting you've never seen, and you can still read it. That's the goal. It's not about remembering old envelopes. It's about handling new ones.

This is what's happening when your phone reads your check. It isn't matching your handwriting to a copy. It learned what handwriting tends to look like.

## The weird scrawl

Of course, some handwriting is so unusual that you get it wrong. A computer can fail on anything unlike what it practiced on, and its mistakes can be surprising. A person would shrug and say, "That's odd." A computer will often just give its best guess.

## Where the sorter has the edge

A human at the post office can look at the envelope and ask a coworker, or notice that something seems off. A machine learning system gives its best guess, and the answer can look just as sure when it's wrong.

## The bottom line

Machine learning is a new mail sorter who has seen a mountain of envelopes: guess, flip, correct, and eventually read a stranger's handwriting at a glance. Next time your phone reads a check or a handwritten note, you'll know a sorter who has seen more envelopes than any person could in many lifetimes is on the job, and still squints sometimes.
`,
      },
    ],
  },

  {
    id: "llm",
    emoji: "\u{1F4AC}",
    name: "Large language model (like ChatGPT)",
    plain:
      "A program that writes text by predicting what is likely to come next, after reading a huge amount of writing.",
    metaphors: [
      {
        id: "forecaster",
        name: "A weather forecaster",
        whyItFits:
          "A forecaster studies the past to predict what is likely next, speaks in chances rather than certainties, and can still be confidently wrong.",
        doc: `# What Is a Large Language Model? Picture a Weather Forecaster

You type a question into a chatbot and a smooth, confident answer appears in seconds. It feels like it looked something up. It didn't. What it's doing is much closer to the weather forecast on your phone.

This post explains how. By the end, you'll know what a large language model is, how it builds an answer, and why it can sound sure while being wrong.

## A rainy morning story

It's 7 a.m. and your phone says "70 percent chance of rain." Nobody knows whether it will rain today. But a forecaster has studied years of weather and knows what usually follows what, so she can say what's likely.

A large language model works like a forecaster for words. Instead of clouds and pressure, it looks at the text so far and predicts what's likely to come next. Let's walk through it.

![The model reads your question, weighs the likely next words, picks one, and repeats until the answer is done.](flow:Your question|Weigh likely next words|Pick one|Repeat)

## The forecast desk

- **Years of weather records are the text it learned from.** A language model has read an enormous amount of writing, including books, articles, and websites, and learned which words tend to follow which.
- **Tomorrow's forecast is the next word.** The model predicts the next small piece of text, then the next, and the next. It builds a whole answer one step at a time, the way a forecaster looks ahead one day, then the day after.
- **The chance of rain is how likely each next word is.** The model weighs many possible next words and picks one that's likely, with a little randomness. That's why asking the same question twice can give different answers.
- **Today's sky is your question.** The forecaster reads today's clouds before saying anything. The model reads your question and everything said so far in the conversation, which is why a clearer question usually gets a better answer.

![The forecaster's tools matched to the model's: records are training text, tomorrow's forecast is the next word, the chance of rain is word likelihood, and today's sky is your question.](map:Training text=Years of weather records|The next word=Tomorrow's forecast|Word likelihood=Chance of rain|Your question=Today's sky)

## Confidently wrong

Sometimes the forecast sounds sure and the picnic gets rained out anyway. A language model can write something smooth and confident that is simply false. It isn't checking facts. It's predicting what sounds likely.

That's the thing to remember most. A fluent answer isn't the same as a correct one.

## Where the forecaster has the edge

Weather follows physical laws, and a forecaster has instruments to check the real sky. A language model has only the writing it learned from. It can't look out the window to see if it was right.

Forecasters also tell you how sure they are. A chatbot often sounds equally sure either way.

## The bottom line

A large language model is a forecaster for words. It studied a huge amount of writing, and now it predicts what's likely to come next, one small piece at a time. Next time a chatbot gives you a polished answer, treat it like a very experienced forecaster: great for a sense of what's likely, and worth double-checking before you plan the picnic around it.
`,
      },
      {
        id: "improv",
        name: "An improv actor",
        whyItFits:
          "An improv actor builds each line from the scene so far, never stops the show, and sounds confident even when making things up.",
        doc: `# What Is a Large Language Model? Picture an Improv Actor

Ask a chatbot about something it knows nothing about, and it will often answer anyway, smoothly and with total confidence. That's not a random glitch. It's a side effect of how these programs work.

This post explains why. By the end, you'll know what a large language model is, how it writes, and when to trust what it says.

## A comedy club story

It's 9 p.m. at a comedy club. The host calls out a prompt from the audience: "A dentist and a pirate." Two actors walk on stage with no script. Each listens to the last line, then says whatever fits next.

A large language model writes the same way. It doesn't plan the whole answer. It adds the next piece that fits, over and over. Let's walk through it.

![The model adds one piece at a time, each one fitting what came before, until the answer is finished.](flow:Your question|Next piece that fits|Another piece|Finished answer)

## The stage

- **Years of watching shows is training on text.** A great improviser has watched countless scenes and soaked up how stories go. A language model has read an enormous amount of writing and soaked up how language goes.
- **The scene so far is your question and the conversation.** The actor doesn't plan ahead. They respond to what was just said. The model responds to what you asked and everything that came before it.
- **The next line is the next word.** The actor adds a line that fits the scene. The model adds the next small piece of text that fits, one at a time, until the answer is complete.

![Three parts of the stage: training text is years of watching shows, your question is the scene so far, and the next word is the next line.](map:Training text=Years of watching shows|Your question=The scene so far|The next word=The next line)

## Never break character

Improv actors keep the scene moving even when they have no idea what they're talking about, and they say it with a straight face. A model can do the same, delivering a made-up fact in a perfectly confident voice.

It isn't trying to fool you. Its job is to say what fits the scene, and a confident answer fits better than "I don't know."

## A new show every night

Run the same scene twice and you get a different performance. A language model has some randomness built in, so the same question can bring different answers. That's normal, not a sign that it's broken.

## Where the actor has the edge

An improv actor knows the difference between the stage and real life, and has real experiences to draw on. They also know when they're making something up. A language model has only the text it read, and usually no signal for when it's guessing, which is why it can seem so sure.

## The bottom line

A large language model is an improv actor who has seen every show: it listens to the scene so far and says what fits next. Next time a chatbot replies smoothly, remember the stage. It's wonderful for brainstorming and drafting, but it's not where to go for facts without checking.
`,
      },
      {
        id: "friend",
        name: "A very well-read friend",
        whyItFits:
          "Everyone has had a friend who finishes their sentences. A very well-read one is a good picture of predicting what comes next.",
        doc: `# What Is a Large Language Model? Picture the Friend Who Finishes Your Sentences

Chatbots are showing up everywhere: in search results, in work software, in your kid's homework. Most of us use them without knowing how they work, and that makes it hard to know when to trust them.

This post clears it up. By the end, you'll know what a large language model is, how it makes an answer, and what it can't do the way a real friend can.

## A lunch story

It's noon at a café. You tell your friend, "I'm going to the grocery..." and she says, "store." She isn't thinking hard. She just knows how sentences tend to go.

Now imagine a friend who has read nearly everything ever written, and who finishes your sentences all day long. That's a large language model. Let's walk through it.

![You start a sentence, the model guesses the next word, then another, until a full paragraph exists.](flow:You start a sentence|It guesses the next word|It guesses another|A full paragraph)

## The friend

- **The friend's years of reading are the training text.** A language model has been trained on an enormous amount of writing, and that's where its knowledge comes from.
- **Finishing your sentence is predicting the next word.** The model does this over and over, one small piece at a time, until it has built a whole paragraph.
- **Knowing the topic is the conversation so far.** Your friend guesses better when she knows what you're talking about. The model's guesses depend on your question and everything said so far, which is why more detail gets you a better answer.

![Three parts of the friendship: training text is years of reading, predicting the next word is finishing your sentence, and the conversation so far is knowing the topic.](map:Training text=Years of reading|Predicting the next word=Finishing your sentence|The conversation so far=Knowing the topic)

## The friend who never says "I'm not sure"

This friend always has something to say. Even about subjects she knows little about, she fills the silence with something that sounds right. Models do the same, and the result can be smooth but wrong.

## A friend without a phone

Your friend stopped reading at some point, and she can't look anything up. A language model's knowledge stops where its training did, unless it's been connected to a tool that lets it search. That's why a chatbot can be out of date on recent events.

## What a real friend does better

A real friend remembers you, asks questions when she's confused, and knows what she doesn't know. Most chatbots start fresh in each new chat unless they've been built to remember, and they don't reliably tell you when they're unsure.

## The bottom line

A large language model is the friend who has read everything and finishes your sentences, one small piece at a time. Next time you chat with an AI, picture her across the table: remarkably well-read, always ready to help, and best when you check anything important.
`,
      },
    ],
  },

  {
    id: "encryption",
    emoji: "\u{1F510}",
    name: "Encryption",
    plain:
      "Scrambling information so that only someone with the right 'key' can read it.",
    metaphors: [
      {
        id: "locked-box",
        name: "A locked box and key",
        whyItFits:
          "Information in transit is like a postcard anyone can read, while a locked box protects it, and only the key holder can open it.",
        doc: `# What Is Encryption? Picture a Locked Box

You've seen the little padlock next to a website's address. Most of us have been told it means "safe," and that's about as far as it goes. What is it actually doing? And why do people argue about it in the news?

This post explains. By the end, you'll know what encryption is, why anyone who handles your data along the way can't read it, and what happens if a key goes missing.

## A coffee shop story

It's 10 p.m. and you're on a coffee shop's public Wi-Fi, buying a gift. You type your card number and tap "buy." That information has to travel through the shop's router and a chain of other computers before it reaches the store. Any of them could, in theory, look at it.

Unless it's inside a locked box. Encryption works like a locked box that only the right person can open. Let's walk through it.

![Your card number is locked in a box, travels across the internet, and is opened by the store.](flow:Your card number|Locked box|The internet|Opened by the store)

## The box

- **A postcard is plain information.** Anyone who handles it can read it.
- **A locked box is encrypted information.** Couriers can carry it, but they can't see inside.
- **Snapping the lock shut is encrypting.** Readable information is scrambled into something that looks like nonsense.
- **The key is the secret that unscrambles it.** Only the person with the right key can open the box and read the message.

![Four parts of the box: plain information is a postcard, encrypted information is a locked box, encrypting is locking it, and the key is the key.](map:Plain information=A postcard|Encrypted information=A locked box|Encrypting=Locking the box|The key=The key)

## What the couriers see

The courier, the sorting office, and everyone in between can see the box. They just can't see what's inside. That's why you can use a shop's website on public Wi-Fi, and the people nearby can't read what you're sending. All they see is scrambled nonsense.

## Lose the key

Lose the key and the box stays shut, even for you. Let someone steal the key and they can read everything. That's why guarding keys matters as much as the lock itself.

## Metal versus math

A real lock can be picked or broken with enough effort. Strong encryption is designed so that guessing the key is practically impossible with today's computers. And there's no actual box. It's all math applied to the message itself.

## The bottom line

Encryption is a locked box rolling across the internet. Everyone can see it, and only the right person can open it. Next time your browser shows a padlock, you'll know there's a locked box between you and the website, and that the key is what keeps it safe.
`,
      },
      {
        id: "pen-pals",
        name: "A secret code between pen pals",
        whyItFits:
          "Two friends agree on a private way to scramble their letters, which matches the idea of a shared secret that only the two of them can unscramble.",
        doc: `# What Is Encryption? Picture a Secret Code Between Pen Pals

Remember inventing a secret code as a kid, where every letter was swapped for another? That game is the ancestor of the technology that protects your bank account, your messages, and your online shopping. It also sits at the center of some heated debates about privacy.

This post explains how it works. By the end, you'll know what a key is, how a message gets scrambled and unscrambled, and why a simple code isn't enough.

## A sixth grade story

It's a Tuesday in sixth grade. You want to pass a note to your best friend, but it will go through three other desks before it gets to her. You don't want anyone reading it on the way.

So the two of you agree on a rule: shift every letter three places forward. "Hello" becomes "Khoor." Encryption works just like this. Let's walk through it.

![Your note is scrambled with the shared rule, passed along the desks, and unscrambled by your friend.](flow:Your note|Scrambled with the rule|Passed along the desks|Unscrambled by your friend)

## The note

- **The shared rule is the key.** Only you and your friend know it.
- **Writing in code is encrypting.** You follow the rule to turn a readable message into gibberish.
- **Decoding it is decrypting.** Your friend runs the rule in reverse and reads your note.
- **The desks along the way are the internet.** Information passes through many computers before it arrives, just as your note passes through other hands.

Anyone along the route can see the gibberish, but nobody can make sense of it.

![Four parts of the code: the key is the shared rule, encrypting is writing in code, decrypting is decoding the note, and the internet is the desks along the way.](map:The key=The shared rule|Encrypting=Writing in code|Decrypting=Decoding the note|The internet=The desks along the way)

## Why a simple code isn't enough

A clever classmate could crack your code by spotting patterns. In English, for example, the most common letter is usually "e," so the most common letter in your gibberish probably stands for it.

That's why real encryption uses far more complicated math. It's built so that finding the pattern would take far too long to be worth trying.

## The hard part: agreeing on the rule

You and your friend could meet at recess and agree on the code in private. Computers that have never met need a clever way to agree on a secret while others are watching. Solving that problem is a big part of modern encryption, and it's why your browser can set up a private conversation with a website it has never visited.

## The bottom line

Encryption is a secret code between pen pals: a shared rule scrambles the message, the same rule unscrambles it, and the math is too hard to crack. Next time you send a private message, you'll know it's the same game you played as a kid, only with math that no classmate could break.
`,
      },
      {
        id: "hotel-safe",
        name: "A hotel room safe",
        whyItFits:
          "A safe protects belongings even when someone gets into the room, which matches how encryption protects data stored on a phone or laptop.",
        doc: `# What Is Encryption? Picture the Safe in Your Hotel Room

If someone stole your phone, could they read your messages and look through your photos? Whether the answer is no depends on encryption. It's also at the heart of arguments about whether police should be able to open a locked phone.

This post explains. By the end, you'll know what encryption does for the information on your devices, what a key is, and why losing it can be a real problem.

## A check-in story

It's your first night on vacation. The hotel room can be opened by the cleaner, the manager, and anyone with a spare key card. So you put your passport and cash in the safe in the closet and set your own four-digit code.

Encryption works like that safe, for the information on your phone or laptop. Let's walk through it.

![Your photos and messages are locked with your passcode, so a thief who steals the phone still can't read them.](flow:Photos and messages|Locked with your passcode|Thief steals the phone|Still unreadable)

## The safe

- **The valuables are your photos, messages, and passwords.** They sit on a phone or laptop that could be lost or stolen.
- **The safe's code is the key.** It's a secret that locks and unlocks your information, and it's often tied to your passcode or fingerprint.
- **Locking the safe is encrypting.** The information inside is scrambled so it looks like noise to anyone without the key.

![Three parts of the safe: your data is the valuables, the key is the safe's code, and encrypting is locking the safe.](map:Your data=The valuables|The key=The safe's code|Encrypting=Locking the safe)

## The burglar gets in anyway

A thief walks into your room but can't open the safe. That's what happens if someone steals an encrypted phone. They hold the device, but they can't read what's inside.

## Forgot the code

If you forget the code, the hotel often can't help. With strong encryption there's often no back door either. That's great for security, and a real problem if you lose your key and have no recovery option.

## Metal versus math, and the spare key

A hotel safe is a physical object that a determined burglar might drill open. Strong encryption is math, not metal, and it's designed to be practically impossible to guess.

Some services keep a spare key for you in case you get locked out. That's convenient, but it means the safe isn't quite yours alone.

## The bottom line

Encryption is the safe in your hotel room, for your data: pick a code, lock it away, and the burglar in the room still can't get in. Next time you set a passcode on your phone, you'll know you're putting your valuables in the safe and shutting the door on everyone else.
`,
      },
    ],
  },
];
