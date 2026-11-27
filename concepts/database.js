// Databases. Written in the voice from writing/style-guide.md.
// Docs are JavaScript template strings: no backticks and no ${ inside them.

CONCEPTS.push({
  id: "database",
  emoji: "\u{1F5C4}\uFE0F",
  name: "Database",
  plain:
    "An organized place where a program keeps information so it can find it again fast.",
  metaphors: [
    {
      id: "filing-cabinet",
      name: "A filing cabinet",
      whyItFits:
        "Information is sorted into drawers and folders with labels, so a clerk can pull out exactly one record without searching everything.",
      doc: `# What Is a Database? Picture a Filing Cabinet

Every data breach headline says the same thing: "records were stolen from a database." It sounds like a vault of ones and zeros. But what is a database, and why does every app seem to have one?

This post opens the drawer. By the end, you'll know what a database is, how it finds one record among millions, and why the people who run one guard it so carefully.

## A doctor's office story

It's Monday morning and you walk into a doctor's office. The receptionist types your name, and a second later your record appears: your address, your appointments, your allergies. Somewhere behind that screen is a database.

A database works like a filing cabinet with a very fast clerk. Let's walk through it.

![You give your name, the program asks the database, the database finds your folder, and your record appears.](flow:You give your name|The program asks|The database finds your folder|Your record appears)

## The cabinet

- **The cabinet is the database.** One organized place that holds everything.
- **Each drawer is a table.** Patients in one drawer, appointments in another.
- **Each folder is a record.** One patient, one folder, with every detail on it.

![Three parts of the cabinet: the database is the cabinet, a table is a drawer, and a record is a folder.](map:The database=The cabinet|A table=A drawer|A record=A folder)

## How the clerk finds one folder fast

A good cabinet has labels and a sorting rule, like alphabetical order. The clerk doesn't flip through every folder. They jump straight to the right drawer and the right spot. Databases do the same thing with something called an index, which is a short list that says where each record lives. Without one, the computer would have to read every record to find yours.

## Why not just keep files on a computer?

Picture a thousand people asking the clerk for folders at the same moment. A good clerk makes sure two people don't scribble on the same folder at once, and that no folder is left half-filled out. A database has those rules built in. That's why banks, stores, and hospitals keep their records in one instead of in a pile of files.

## Why breaches make headlines

A cabinet that holds everything about a lot of people is valuable. Whoever gets the key gets every folder. That's why companies lock the database, limit who can open it, and keep a log of who looked at what.

## Where the cabinet comparison stops

A real cabinet holds one copy of each folder. A database usually keeps extra copies in other places, in case one breaks. And it can serve thousands of clerks at once, which no cabinet could.

## The bottom line

A database is a filing cabinet with a very fast clerk: drawers for kinds of things, folders for each record, and labels that make finding one in a blink possible. Next time an app greets you by name, you'll know a clerk just pulled your folder.
`,
    },
    {
      id: "spreadsheet",
      name: "A giant spreadsheet",
      whyItFits:
        "Tables, rows, and columns are exactly how most databases are organized, and the problems of a big shared spreadsheet explain why databases exist.",
      doc: `# What Is a Database? Picture a Giant Spreadsheet

You've probably used a spreadsheet to track something: a budget, a guest list, a team schedule. Companies track millions of things, and they can't do it in a spreadsheet. They use a database.

This post shows the difference. By the end, you'll know how a database is organized, how its sheets connect to each other, and why a spreadsheet gives up first.

## A club story

It's Tuesday evening and you're tracking your club's members in a spreadsheet: names, emails, dues paid. For 30 people, it's perfect. Now imagine the club has 30 million members, thousands of them signing up every minute.

A database works like that spreadsheet, built to survive that kind of crowd. Let's walk through it.

![A new member signs up, a new row is added, someone searches, and the row is found.](flow:A new member signs up|A new row is added|Someone searches|The row is found)

## The sheets

- **A table is a sheet.** One sheet for each kind of thing, such as members, payments, and events.
- **A record is a row.** One member, one row.
- **A field is a column.** Name, email, date joined.

![Three parts of the spreadsheet: a table is a sheet, a record is a row, and a field is a column.](map:A table=A sheet|A record=A row|A field=A column)

## Linking sheets together

Say a member pays their dues. You don't retype their address on the payment row. You give each member a number, and the payment row holds that number. That connection is what's called a relational database: sheets linked by numbers. Change the address once, and every payment sees the new one.

## Where a spreadsheet gives up

A spreadsheet slows to a crawl when it has millions of rows. Two people editing at once can overwrite each other. One wrong click can delete a column, and there's no way to ask who did it. A database handles millions of rows, lets many people work at once, and follows rules that keep the data correct.

## Where the spreadsheet comparison stops

Most databases are used by programs, not by people looking at them. You rarely see the rows. And some databases don't use rows and columns at all. They store things in other shapes, such as documents or connections between items.

## The bottom line

A database is a giant spreadsheet that never slows down: sheets for kinds of things, rows for records, and links between them. Next time a website remembers you after one click, you'll know it found your row among millions.
`,
    },
    {
      id: "library-catalog",
      name: "A library catalog",
      whyItFits:
        "A catalog is a short list that points to where each book lives, which is how a database's index lets it find data without searching everything.",
      doc: `# What Is a Database? Picture a Library Catalog

You type a few words into a search box and results appear in a blink, out of millions of possible answers. It feels like magic, but it's mostly good organization. Databases are built around that organization.

This post shows how. By the end, you'll know why a database can find one thing so quickly, what that speed costs, and how a program asks a question.

## A Saturday at the library story

It's Saturday and you want a book on gardening. You could walk every shelf in the building. Instead, you look up "gardening" in the catalog, which tells you a shelf number. Three minutes instead of three hours.

A database does that for information. Let's walk through it.

![You search for gardening, the catalog lists matches, you get a shelf number, and you fetch the book.](flow:You search for gardening|The catalog lists matches|You get a shelf number|You fetch the book)

## The library

- **The shelves are the stored data.** Everything is kept somewhere specific.
- **The catalog is the index.** A short list that points to where each item lives.
- **The shelf number is the pointer.** It takes you straight to the right spot.

![Three parts of the library: the stored data is the shelves, the index is the catalog, and a pointer is the shelf number.](map:The stored data=The shelves|The index=The catalog|A pointer=The shelf number)

## The catalog has a cost

Every time the library gets a new book, someone has to add a card to the catalog. The more ways you can look things up, such as by title, author, and subject, the more cards there are to keep in order. Databases work the same way. Indexes make finding things fast, but they take up space and make adding new records a little slower.

## Asking the question

At a library, you ask a librarian in words. A program asks a database in a special language, most often one called SQL. It reads like a very formal request: "all books about gardening published after 2010." The database figures out the quickest route through its catalog and returns the matches.

## Where the catalog comparison stops

A library catalog only points to books. A database holds the data itself, and it can also change it, count it, and combine it. Ask how many gardening books came out each year, and a database can answer without anyone counting shelves.

## The bottom line

A database is a library with a perfect catalog: everything is stored somewhere specific, and a short list points straight to it. Next time a search returns in a blink, you'll know it didn't walk the shelves.
`,
    },
  ],
});
