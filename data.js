// Each concept has metaphors chosen because they match how the concept really works.
// Every metaphor maps its parts one-to-one onto the real thing (metaphorPart -> realPart).
// To add a concept, add an entry below. No other code changes are needed.

const beat = (heading, story, metaphorPart, realPart) => ({
  heading,
  story,
  metaphorPart,
  realPart,
});

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
        title: "A Data Center Is a Giant Restaurant Kitchen",
        hook: "You have never seen the kitchen, but you have eaten the food. Every time you tap play on a video or ask a chatbot a question, you place an order. This is the kitchen that fills it.",
        beats: [
          beat(
            "The order comes in",
            "A waiter takes your order and slides it through a window. In a data center, that window is the connection to the internet. Your tap, search, or question arrives as an order slip.",
            "The order window",
            "The connection to the internet",
          ),
          beat(
            "Rows and rows of cooks",
            "Behind the window, cooks work at station after station. One chops, one grills, one plates. The computers in a data center work the same way: many of them, each handling a piece of your order at the same time, so it comes back fast.",
            "The cooks and their stations",
            "The servers (the working computers)",
          ),
          beat(
            "The pantry",
            "Nobody cooks from nothing. Walk-in fridges and shelves hold the ingredients. In a data center, those are your photos, videos, messages, and websites, kept in storage until an order needs them.",
            "The pantry and fridges",
            "Storage",
          ),
          beat(
            "Why the kitchen is so hot",
            "Stoves turn energy into heat, so a kitchen needs strong fans and cold air to keep from overheating. Computers do the same thing: nearly all the electricity they use ends up as heat, so data centers run big cooling systems.",
            "Vents and fans",
            "Cooling",
          ),
          beat(
            "The kitchen never closes",
            "A good restaurant keeps serving if one stove breaks or the lights flicker. It has spare stoves, a backup generator, and maybe a sister restaurant with the same recipes. Data centers keep spare machines, backup power, and copies of important information in other buildings, which is why your apps rarely go down.",
            "Spare stoves, a generator, and a sister restaurant",
            "Spare machines, backup power, and copies in other buildings",
          ),
        ],
        limit:
          "In a kitchen, ingredients get used up. In a data center, information is copied rather than used up: your photo is still in the pantry after it has been shown to you. And while a kitchen makes one dish at a time, a data center is serving a huge number of different orders at once.",
        closing:
          "Next time you tap play, picture an order slip fluttering to the window and a thousand cooks getting to work. You will not see the kitchen, but now you know it is there.",
      },
      {
        id: "library",
        name: "A giant library",
        whyItFits:
          "It holds a huge amount of organized information, has a front desk that fetches what you ask for, and keeps copies of precious items elsewhere.",
        title: "A Data Center Is a Library That Never Sleeps",
        hook: "Imagine a library so big that it holds a copy of most of what you see online, and it answers a request in the blink of an eye. That is closer to a data center than you might think.",
        beats: [
          beat(
            "The front desk",
            "Every library visit starts at the desk, where you ask for something. In a data center, your request arrives through the connection to the internet, and it is routed to the right place.",
            "The front desk",
            "The connection to the internet",
          ),
          beat(
            "Shelves without end",
            "Row after row of shelves hold books, organized so anything can be found quickly. In a data center, those shelves hold photos, videos, messages, and websites, kept in storage and labeled so they can be located instantly.",
            "The shelves",
            "Storage",
          ),
          beat(
            "Librarians who run",
            "When you ask for a book, a librarian races off, finds it, and brings it back. In a data center, working computers called servers do the fetching, and many of them work at the same time so nobody waits in line.",
            "The librarians",
            "The servers (the working computers)",
          ),
          beat(
            "Keeping the old books safe",
            "Libraries control temperature and dampness to protect their collections. Data centers have to control heat for the same reason: computers give off a lot of warmth, and too much of it damages them.",
            "Climate control",
            "Cooling",
          ),
          beat(
            "The spare copy across town",
            "For the rarest books, a smart library keeps a copy at another branch. If one building floods, nothing is lost. Data centers do this with important information, storing copies in more than one building.",
            "A copy at another branch",
            "Backups in other buildings",
          ),
        ],
        limit:
          "A library only lends out what is on its shelves. A data center does more than fetch: its computers can also work things out on the spot, like writing an AI chatbot's reply, which is closer to having a librarian who can write a brand new book on request.",
        closing:
          "So the next time something loads instantly on your phone, you can imagine a very fast librarian in a very large, very quiet building, bringing you exactly what you asked for.",
      },
      {
        id: "apartment",
        name: "An apartment building",
        whyItFits:
          "Many different tenants share one building and its utilities, with security at the door and a crew keeping the lights on.",
        title: "A Data Center Is an Apartment Building for Computers",
        hook: "Most of us never think about who looks after the building we live in: the power, the water, the locks. A data center is that building, except every apartment is filled with computers instead of people.",
        beats: [
          beat(
            "The front door and the doorman",
            "An apartment building has a main entrance with a doorman and locks. A data center has careful security at its door, and it also has the connection to the internet, the road everything travels in and out on.",
            "The doorman and the front door",
            "Security and the internet connection",
          ),
          beat(
            "Every tenant gets a space",
            "Different tenants rent different apartments, each decorated their own way. In a data center, different companies fill their own spaces with computers that run their own apps and websites.",
            "The apartments and tenants",
            "Companies' computers, each running their own services",
          ),
          beat(
            "Utilities for everybody",
            "A building must supply water, heat, and electricity to every apartment, all day. A data center's big job is supplying huge amounts of electricity and removing all the heat that computers give off.",
            "Electricity, plumbing, and heating",
            "Power and cooling",
          ),
          beat(
            "The superintendent",
            "When a bulb goes out or a pipe leaks, someone on the maintenance team fixes it, often before the tenants notice. Data centers have teams watching the equipment around the clock and swapping out parts that fail.",
            "The superintendent and the maintenance crew",
            "The operations team and monitoring systems",
          ),
          beat(
            "When the power goes out",
            "A well-built building has emergency lights and a backup generator so the elevator and fire alarms keep working. Data centers have batteries and generators so the computers keep running through a power cut.",
            "Emergency lights and a generator",
            "Batteries and backup generators",
          ),
        ],
        limit:
          "Tenants in a real building mostly live separately and do not share anything. In a data center, the computers are often connected tightly to each other and to the outside world, so it is more like an apartment building where everyone is constantly on a phone call.",
        closing:
          "Next time you pass a plain, windowless building with a lot of fans on the roof, you will know it might be someone's very busy apartment building.",
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
        title: "Machine Learning Is a Toddler Learning What a Dog Is",
        hook: "Nobody ever gave you a rulebook for recognizing a dog. You just saw a lot of them. Machine learning is built on that same idea.",
        beats: [
          beat(
            "No rulebook",
            "You could try to teach a toddler that a dog has four legs, a tail, and fur. But cats have those too. So instead, you point and say 'dog' over and over, and 'cat' when it is a cat.",
            "Pointing and naming animals",
            "Labeled examples used for training",
          ),
          beat(
            "Guess and correct",
            "The toddler points at a cat and says 'dog!' You say, 'Nope, that is a cat.' Each correction nudges what the child pays attention to next time.",
            "Being corrected",
            "Feedback that adjusts the system",
          ),
          beat(
            "A feel for it",
            "After enough animals, the child is not remembering each one. She has a feel for what makes a dog a dog: the ears, the shape, the way it moves. That feel is not a rule anyone wrote down.",
            "The child's feel for 'dog'",
            "The learned pattern (the model)",
          ),
          beat(
            "A dog she has never met",
            "Show her a breed she has never seen, and she still says 'dog!' That is the whole point: the skill works on new things, not just ones she has seen before.",
            "Meeting a new dog",
            "Using the model on new information",
          ),
          beat(
            "The grass mistake",
            "If every dog the child ever saw was standing on grass, she might decide grass means dog. Computers fall into the same trap when their examples are lopsided, which is why the choice of examples matters so much.",
            "Only ever seeing dogs on grass",
            "Biased or limited training data",
          ),
        ],
        limit:
          "A child knows what a dog is: it is alive, it can be petted, it can bark. A machine learning system only picks up patterns in the examples it saw, with no understanding behind them. It also usually needs far more examples than a toddler does.",
        closing:
          "So when your phone sorts your photos by who is in them, picture a very patient toddler who has looked at a lot of pictures, and who sometimes confuses a cat for a dog.",
      },
      {
        id: "chef",
        name: "A chef perfecting a recipe",
        whyItFits:
          "Cook, taste, adjust a little, and repeat. This mirrors the way a machine learning system is trained.",
        title: "Machine Learning Is a Chef Who Keeps Tasting the Soup",
        hook: "No chef gets a recipe right on the first try. They cook, taste, tweak, and taste again. Machine learning works a lot like that, only at breakneck speed.",
        beats: [
          beat(
            "A terrible first attempt",
            "The chef starts with random pinches of this and that. The first soup is bad. A machine learning system starts the same way, with its settings set more or less at random.",
            "The first, random soup",
            "A model with untrained settings",
          ),
          beat(
            "The taste test",
            "The chef tastes it and compares it to the soup they are aiming for. How far off is it? That distance is what the chef pays attention to. The system compares its answer to the correct one and measures how wrong it is.",
            "Tasting and comparing to the target",
            "Checking an answer against the right answer",
          ),
          beat(
            "One pinch at a time",
            "Too salty? Use a little less salt. Too bland? A bit more herbs. Nobody rewrites the recipe; they nudge it. The system makes tiny adjustments to its settings in whichever direction makes the answer less wrong.",
            "Adjusting a pinch of salt",
            "Small adjustments to the model's settings",
          ),
          beat(
            "Thousands of batches",
            "One tweak does not do much. But after thousands of batches, the soup gets remarkably good. This repetition is what 'training' means: many rounds of try, check, and adjust.",
            "Cooking batch after batch",
            "Training over many rounds",
          ),
          beat(
            "Serving a new guest",
            "At last the chef serves the soup to someone new. If it tastes great to people who never helped test it, the recipe works. The test of a trained system is the same: does it do well on things it has not seen before?",
            "Serving a brand-new guest",
            "Using the model on new information",
          ),
        ],
        limit:
          "A chef has a tongue, knows why the soup is bland, and can explain a change. A machine learning system adjusts a huge number of tiny settings automatically, and often cannot say why a particular combination works.",
        closing:
          "So when a streaming service seems to know what you want to watch next, picture a chef who has tasted an enormous number of batches and is now pretty good at guessing what you like.",
      },
      {
        id: "mail",
        name: "A new mail sorter",
        whyItFits:
          "A new postal worker learns to read messy handwriting by seeing thousands of letters and being corrected, then handles handwriting they have never seen.",
        title:
          "Machine Learning Is a New Mail Sorter Learning Messy Handwriting",
        hook: "Imagine your first day at the post office, facing a mountain of envelopes in a thousand different handwriting styles. You are about to learn the way a machine learns.",
        beats: [
          beat(
            "A mountain of examples",
            "Nobody gives you a rule for reading every scrawl. You get a huge pile of envelopes with the right answers on the back. A machine learning system starts with a huge pile of examples, each with the right answer attached.",
            "The pile of envelopes with answers on the back",
            "Training examples with correct answers",
          ),
          beat(
            "Sort, check, correct",
            "You make your best guess at each address, flip the envelope, and see whether you were right. When you are wrong, you notice what you missed. The system does the same: guess, check, adjust.",
            "Flipping the envelope to check",
            "Checking guesses against the right answers",
          ),
          beat(
            "Getting faster",
            "After a few thousand letters you stop reading each letter by letter and start recognizing shapes at a glance. That quick sense is the pattern the system has learned.",
            "Recognizing words at a glance",
            "The learned pattern (the model)",
          ),
          beat(
            "A stranger's handwriting",
            "Then a letter arrives in handwriting you have never seen, and you can still read it. This is the goal: handling new cases, not just remembering old ones.",
            "Reading new handwriting",
            "Using the model on new information",
          ),
          beat(
            "The weird scrawl",
            "Of course, some handwriting is so unusual that you get it wrong. A system can fail on anything unlike what it practiced on, and the mistakes can be surprising.",
            "Handwriting unlike anything you practiced on",
            "Inputs that differ from the training examples",
          ),
        ],
        limit:
          "A person at the post office can look at the envelope and ask a coworker, or notice something is odd. A machine learning system just gives its best guess, and it may sound just as sure when it is wrong.",
        closing:
          "So the next time your phone reads a handwritten note or a check, imagine a sorter who has seen more envelopes than any human could in many lifetimes, and still sometimes squints.",
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
        title: "A Large Language Model Is a Weather Forecaster for Words",
        hook: "When you ask a chatbot a question, it is not looking up the answer. It is doing something much closer to what a weather forecaster does every morning.",
        beats: [
          beat(
            "Years of records",
            "A forecaster has studied years of weather, learning what usually follows what. A language model has read an enormous amount of writing, learning which words tend to follow which.",
            "Years of weather records",
            "A huge amount of text it learned from",
          ),
          beat(
            "One day at a time",
            "A forecaster predicts tomorrow, then uses that to look further ahead. A language model predicts the next small piece of text, then the next, and the next, building a whole answer one step at a time.",
            "Forecasting tomorrow, then the day after",
            "Predicting the next word, then the next",
          ),
          beat(
            "Seventy percent chance",
            "'Seventy percent chance of rain' is a weighing of possibilities. A language model weighs many possible next words and picks one that is likely, with a little randomness, which is why asking twice can give different answers.",
            "The chance of rain",
            "How likely each possible next word is",
          ),
          beat(
            "Today's sky",
            "The forecaster looks at today's clouds before saying anything. The model looks at your question and everything written so far in the conversation. That is why a clearer question usually gets a better answer.",
            "Today's clouds and pressure",
            "Your question and the conversation so far",
          ),
          beat(
            "Confidently wrong",
            "Sometimes the forecast sounds sure and the picnic is rained out anyway. A language model can write something smooth and confident that is simply false, because it is predicting what sounds likely, not checking facts.",
            "A forecast that sounds sure but is wrong",
            "A fluent answer that is incorrect",
          ),
        ],
        limit:
          "Weather is governed by physical laws, and a forecaster has instruments to check the real sky. A language model only has the writing it learned from and no weather station of its own, so it cannot look out the window to see if it was right. Forecasters also tell you how sure they are, while a chatbot often sounds equally sure either way.",
        closing:
          "So treat a chatbot like a very experienced forecaster: great for a sense of what is likely, but worth double-checking before you plan the picnic around it.",
      },
      {
        id: "improv",
        name: "An improv actor",
        whyItFits:
          "An improv actor builds each line from the scene so far, never stops the show, and sounds confident even when making things up.",
        title:
          "A Large Language Model Is an Improv Actor Who Has Seen Every Show",
        hook: "Improv actors never know the next line. They listen to the scene so far and say what fits. A chatbot is doing something surprisingly similar.",
        beats: [
          beat(
            "A lifetime of shows",
            "A great improviser has watched countless scenes and absorbed how stories go. A language model has read an enormous amount of writing and absorbed how language goes.",
            "Watching countless scenes",
            "Training on a huge amount of text",
          ),
          beat(
            "Listening to the scene",
            "The actor does not plan the whole scene. They respond to what was just said. A language model responds to your question and everything said so far in the conversation.",
            "The scene so far",
            "Your question and the conversation so far",
          ),
          beat(
            "Yes, and...",
            "The golden rule of improv is to add the next line that fits. The model adds the next piece of text that fits, over and over, until the answer is complete.",
            "Adding the next line",
            "Predicting the next word, one at a time",
          ),
          beat(
            "Never break character",
            "Improv actors keep the scene moving even when they have no idea what they are talking about, and they say it with a straight face. A model can do the same, delivering a made-up fact in a perfectly confident voice.",
            "Committing to the bit",
            "A confident answer that is made up",
          ),
          beat(
            "Different every night",
            "Run the same scene twice and you will get a different performance. A language model has some built-in randomness, so the same question can bring different answers.",
            "A new performance every night",
            "Answers that vary from one ask to the next",
          ),
        ],
        limit:
          "An improv actor knows the difference between the stage and real life, and has real experiences to draw from. A language model has only the text it read. And the actor knows when they are making it up. The model usually has no such signal, which is why it can seem so sure.",
        closing:
          "So the next time a chatbot replies smoothly, remember the stage: wonderful for brainstorming and drafting, but not the place to go for the facts without checking.",
      },
      {
        id: "friend",
        name: "A very well-read friend",
        whyItFits:
          "Everyone has had a friend who finishes their sentences. A very well-read one is a good picture of predicting what comes next.",
        title:
          "A Large Language Model Is the Friend Who Finishes Your Sentences",
        hook: "You know the friend who starts nodding halfway through your sentence and then finishes it for you? Now imagine that friend has read nearly everything.",
        beats: [
          beat(
            "The friend who has read everything",
            "Picture a friend who has spent years reading books, articles, and conversations on every subject. A language model has been trained on an enormous amount of writing, and that is where its knowledge comes from.",
            "The friend's years of reading",
            "Training on a huge amount of text",
          ),
          beat(
            "Finishing your sentence",
            "You say, 'I'm going to the grocery...' and they say 'store.' They are not thinking hard; they just know how sentences tend to go. A language model does exactly this, but over and over, to build whole paragraphs.",
            "Finishing your sentence",
            "Predicting the next word",
          ),
          beat(
            "Knowing what you are talking about",
            "Your friend's guesses are better when they know what you are talking about. The model's guesses depend on your question and the conversation so far, which is why more detail gets you a better answer.",
            "Knowing the topic of conversation",
            "The question and conversation so far",
          ),
          beat(
            "Never saying 'I'm not sure'",
            "This friend always has something to say. Even about subjects they know little about, they will fill the silence with something that sounds right. Models do this as well, and the result can be smooth but wrong.",
            "Always having an answer",
            "A fluent answer that can be incorrect",
          ),
          beat(
            "No phone to look things up",
            "Your friend stopped reading at some point, and cannot Google anything. A language model's knowledge stops where its training did, unless it has been connected to a tool that lets it look things up.",
            "A friend who cannot look things up",
            "Knowledge limited to what it was trained on",
          ),
        ],
        limit:
          "A real friend remembers you, asks questions when confused, and knows what they do not know. Most chatbots start fresh in each new chat unless they have been built to remember, and they do not reliably tell you when they are unsure.",
        closing:
          "So when you chat with an AI, picture that friend across the table: remarkably well-read and always ready to help, and best when you check anything important.",
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
        title: "Encryption Is a Locked Box That Only You Can Open",
        hook: "Every message you send online travels through many hands. Encryption is the reason those hands cannot read it.",
        beats: [
          beat(
            "Postcards and locked boxes",
            "Send a postcard and everyone who handles it can read it. Send a locked box and they can only carry it. Normal, unprotected information is the postcard. Encrypted information is the locked box.",
            "A postcard versus a locked box",
            "Plain information versus encrypted information",
          ),
          beat(
            "Snapping the lock shut",
            "Before sending, you put your message in the box and lock it. Encryption takes readable information and scrambles it into something that looks like nonsense.",
            "Locking the box",
            "Encrypting (scrambling) the information",
          ),
          beat(
            "The key",
            "Only the person with the right key can open the box and read the message. In encryption, the key is a secret piece of information that unscrambles the message.",
            "The key",
            "The secret that unscrambles the information",
          ),
          beat(
            "Couriers cannot peek",
            "The courier, the sorting office, and everyone in between can see the box but not what is inside. That is why you can use a shop's website on public Wi-Fi and the people nearby cannot read what you are sending.",
            "Couriers who only see a locked box",
            "Anyone on the network seeing only scrambled information",
          ),
          beat(
            "Lose the key",
            "Lose the key and the box stays shut, even for you. Let someone steal the key and they can read everything. That is why keeping keys safe matters as much as the lock itself.",
            "A lost or stolen key",
            "A lost or stolen encryption key",
          ),
        ],
        limit:
          "A real lock can be picked or broken with enough effort. Strong encryption is designed so that guessing the key is practically impossible with today's computers. There is also no physical box: it is all math applied to the message itself.",
        closing:
          "So when your browser shows a little padlock, picture the locked box rolling along the internet: everyone can see it, and only the right person can open it.",
      },
      {
        id: "pen-pals",
        name: "A secret code between pen pals",
        whyItFits:
          "Two friends agree on a private way to scramble their letters, which matches the idea of a shared secret that only the two of them can unscramble.",
        title: "Encryption Is a Secret Code Between Two Pen Pals",
        hook: "Remember inventing a secret code as a kid, where every letter was swapped for another? That game is the ancestor of the technology that protects your bank account.",
        beats: [
          beat(
            "Agree on the secret",
            "You and your friend decide on a rule: say, shift every letter three places forward. Only the two of you know the rule. In encryption, that shared secret is called a key.",
            "The shared rule you two agreed on",
            "The key",
          ),
          beat(
            "Write it in code",
            "You write your message and scramble it by following the rule. 'Hello' turns into gibberish. Encryption does this to real information, automatically.",
            "Writing in code",
            "Encrypting the information",
          ),
          beat(
            "The letter travels",
            "The letter passes through many hands: the mail carrier, the sorting office. Anyone can read the gibberish, but nobody can make sense of it. Online, information also passes through many computers before it arrives.",
            "The letter passing through other hands",
            "Information passing across the internet",
          ),
          beat(
            "Your friend decodes it",
            "Your friend applies the rule in reverse and reads your message. The same key unscrambles what it scrambled. This step is called decrypting.",
            "Your friend decoding the letter",
            "Decrypting",
          ),
          beat(
            "Why a simple code is not enough",
            "A clever stranger could crack a simple code by spotting patterns. That is why real encryption uses far more complicated math, built so that finding the pattern would take far too long to be worth trying.",
            "A simple code a stranger cracks",
            "Weak encryption versus modern, strong encryption",
          ),
        ],
        limit:
          "Pen pals can meet in person and agree on the code in private. Computers that have never met need a clever way to agree on a secret while others are watching, and a big part of modern encryption is solving exactly that problem.",
        closing:
          "So the next time you send a private message, picture the two pen pals: the same game you played as a kid, played with math too hard for anyone to crack.",
      },
      {
        id: "hotel-safe",
        name: "A hotel room safe",
        whyItFits:
          "A safe protects belongings even when someone gets into the room, which matches how encryption protects data stored on a phone or laptop.",
        title: "Encryption Is the Safe in Your Hotel Room",
        hook: "Your hotel room can be opened by the cleaner, the manager, and anyone with a spare key card. That is why there is a safe inside it. Encryption is that safe for your data.",
        beats: [
          beat(
            "Valuables in the room",
            "You keep your passport and cash in a hotel room you do not fully control. Likewise, your photos, messages, and passwords sit on a phone or laptop that could be lost or stolen.",
            "Valuables left in a hotel room",
            "Information stored on a phone or laptop",
          ),
          beat(
            "Choose a code",
            "To use the safe, you set your own code. In encryption, a secret key, often unlocked with your passcode or fingerprint, does the same job.",
            "Setting the safe's code",
            "The secret key (often tied to your passcode)",
          ),
          beat(
            "Close the door",
            "Shut the safe and your belongings are locked away. When your phone is locked and encrypted, the information inside is scrambled so it looks like noise to anyone who does not have the key.",
            "Closing and locking the safe",
            "Encrypting the stored information",
          ),
          beat(
            "The burglar gets in anyway",
            "A thief walks into the room but cannot get into the safe. If someone steals an encrypted phone, they hold the device but cannot read what is inside.",
            "A burglar in the room but not in the safe",
            "A stolen, encrypted device",
          ),
          beat(
            "Forgot the code",
            "If you forget the code, the hotel often cannot help. With strong encryption, there is often no back door either, which is great for security and a real problem if you lose your own key and have no recovery option.",
            "Forgetting the safe's code",
            "Losing the key to encrypted information",
          ),
        ],
        limit:
          "A hotel safe is a physical object that a determined burglar might drill open, while strong encryption is math, not metal. And some services keep a spare key for you in case you are locked out, which is convenient but means the safe is not quite yours alone.",
        closing:
          "So the next time you set a passcode on your phone, you are doing what you do in a hotel: putting your valuables in the safe, and shutting the door on everyone else.",
      },
    ],
  },
];
