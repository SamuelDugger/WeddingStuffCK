// This is the main settings file for the wedding website.
// You'll update this file to manage your guest list, events, and passwords.

// Password to log in to the admin page (admin.html)
const ADMIN_PASSWORD = "C&K02272027";

// Your Google Apps Script URL — this is what saves RSVPs to Google Sheets.
// Leave this empty if you're just testing locally.
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw/exec";


// Your events — each one guests can RSVP for.
// Fill in the date, time, and location as those details are confirmed.
// "mealChoices" controls what food options appear. Remove the options to hide the meal question entirely.
const WEDDING_EVENTS = {
  ceremony: {
    id: "ceremony",
    label: "Wedding Ceremony",
    date: "Saturday, February 27, 2027",
    time: "4:00 PM",
    location: "Pryor Place Event Center, Newcastle, OK",
    mealChoices: [],
    deadline: "January 27, 2027",
  },
  reception: {
    id: "reception",
    label: "Reception",
    date: "Saturday, February 27, 2027",
    time: "4:30 PM",
    location: "Pryor Place Event Center, Newcastle, OK",
    mealChoices: ["Chicken", "Beef", "Vegetarian", "No preference"],
    deadline: "January 27, 2027",
  },
  shower: {
    id: "shower",
    label: "Wedding Shower",
    date: "Sunday, November 15, 2026",
    time: "2:00 PM",
    location: "Choctaw Nation KOA",
    mealChoices: [],
    deadline: "TBD",
  },
  rehearsal: {
    id: "rehearsal",
    label: "Rehearsal Dinner",
    date: "Friday, February 26, 2027",
    time: "6:00 PM",
    location: "The Lodge at Pryor Place Event Center, Newcastle, OK",
    mealChoices: ["Chicken", "Beef", "Vegetarian", "No preference"],
    deadline: "January 27, 2027",
  },
};


// Your guest list — one entry per household (a single person, a couple, or a whole family).
//
// Each household needs:
//   id         - a unique number (just count up from 1)
//   familyName - what guests will search for and see as the heading
//                (e.g. "John Smith", "Mike & Lisa Davis", "The Williams Family")
//   members    - a list of every person in that household who gets their own RSVP.
//                Each member needs:
//                  name   - exactly how it appears on the invitation
//                  events - which events THIS PERSON is invited to (use the IDs
//                           from WEDDING_EVENTS above). Different people in the
//                           same household can be invited to different events —
//                           for example, parents can be invited to the rehearsal
//                           dinner while their kids are only invited to the wedding.
//
// Optional (on the household, not the member):
//   plusOne: true   - lets whoever fills out the RSVP add one extra guest by name
//   notes: "..."    - a private note only visible to you on the admin page
//
// A single guest with no one else in their household is just a household with
// one member.
//
// Tip: guests can search by the household name OR by any member's first or
// last name — spelling should match the invitation.

const GUEST_LIST = [
  {
    id: 1,
    familyName: "Michele & Jenessa Dugger",
    members: [
      { name: "Michele Dugger", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Jenessa Dugger", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 2,
    familyName: "Jerry & Gina Dugger",
    members: [
      { name: "Jerry Dugger", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Gina Dugger", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 3,
    familyName: "Samuel Dugger",
    members: [{ name: "Samuel Dugger", events: ["ceremony", "reception", "rehearsal"] }],
  },
  {
    id: 4,
    familyName: "Peyton & Will Johnson",
    members: [
      { name: "Peyton Johnson", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Will Johnson", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 5,
    familyName: "Matt & Shelby Johnston",
    members: [
      { name: "Matt Johnston", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Shelby Johnston", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 6,
    familyName: "Jim & Becky Myers",
    members: [
      { name: "Jim Myers", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Becky Myers", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 7,
    familyName: "Mike & Karlee Myers",
    members: [
      { name: "Mike Myers", events: ["ceremony", "reception"] },
      { name: "Karlee Myers", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 8,
    familyName: "Cortney & Macee Jackson",
    members: [
      { name: "Cortney Jackson", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Macee Jackson", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 9,
    familyName: "Derek Hatridge",
    members: [{ name: "Derek Hatridge", events: ["ceremony", "reception"] }],
  },
  {
    id: 10,
    familyName: "Amber & Albert Alexander",
    members: [
      { name: "Amber Alexander", events: ["ceremony", "reception", "shower"] },
      { name: "Albert Alexander", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 11,
    familyName: "Tricia Griffin",
    members: [{ name: "Tricia Griffin", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 12,
    familyName: "Nelda Dugger",
    members: [{ name: "Nelda Dugger", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 13,
    familyName: "Sharon & Daniel Martin",
    members: [
      { name: "Sharon Martin", events: ["ceremony", "reception"] },
      { name: "Daniel Martin", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 14,
    familyName: "Olivia & Clayton Fulton",
    members: [
      { name: "Olivia Fulton", events: ["ceremony", "reception", "shower", "rehearsal"] },
      { name: "Clayton Fulton", events: ["ceremony", "reception", "shower", "rehearsal"] },
    ],
  },
  {
    id: 15,
    familyName: "Ashlee & Matt Helmer",
    members: [
      { name: "Ashlee Helmer", events: ["ceremony", "reception", "shower"] },
      { name: "Matt Helmer", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 16,
    familyName: "Breanna Dalpoas & Chris Ursum",
    members: [
      { name: "Breanna Dalpoas", events: ["ceremony", "reception", "shower"] },
      { name: "Chris Ursum", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 17,
    familyName: "Shayla & Cody Cone",
    members: [
      { name: "Shayla Cone", events: ["ceremony", "reception", "shower"] },
      { name: "Cody Cone", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 18,
    familyName: "Natalie & Gale Horn",
    members: [
      { name: "Natalie Horn", events: ["ceremony", "reception", "shower"] },
      { name: "Gale Horn", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 19,
    familyName: "Kaylinn & Kellen Crow",
    members: [
      { name: "Kaylinn Crow", events: ["ceremony", "reception", "shower"] },
      { name: "Kellen Crow", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 20,
    familyName: "Alex Macy",
    members: [{ name: "Alex Macy", events: ["ceremony", "reception", "shower"] }],
    plusOne: true,
  },
  {
    id: 21,
    familyName: "Melodee & Armando Teran",
    members: [
      { name: "Melodee Teran", events: ["ceremony", "reception", "shower"] },
      { name: "Armando Teran", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 22,
    familyName: "Krysten & Daniel Brown",
    members: [
      { name: "Krysten Brown", events: ["ceremony", "reception", "shower"] },
      { name: "Daniel Brown", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 23,
    familyName: "Jennifer & Bobby Gene Brewer",
    members: [
      { name: "Jennifer Brewer", events: ["ceremony", "reception", "shower"] },
      { name: "Bobby Gene Brewer", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 24,
    familyName: "Grace & Alec Rudolf",
    members: [
      { name: "Grace Rudolf", events: ["ceremony", "reception", "shower"] },
      { name: "Alec Rudolf", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 25,
    familyName: "Hannah & Billie Copley",
    members: [
      { name: "Hannah Copley", events: ["ceremony", "reception", "shower"] },
      { name: "Billie Copley", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 26,
    familyName: "Christi & Logan Johnson",
    members: [
      { name: "Christi Johnson", events: ["ceremony", "reception", "shower"] },
      { name: "Logan Johnson", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 27,
    familyName: "Cheryl & Paul Gentry",
    members: [
      { name: "Cheryl Gentry", events: ["ceremony", "reception", "shower"] },
      { name: "Paul Gentry", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 28,
    familyName: "Kristin Hoover",
    members: [{ name: "Kristin Hoover", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 29,
    familyName: "Burgess Navarro & Ceejay Fletcher",
    members: [
      { name: "Burgess Navarro", events: ["ceremony", "reception"] },
      { name: "Ceejay Fletcher", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 30,
    familyName: "Sandy & Michael Vigil",
    members: [
      { name: "Sandy Vigil", events: ["ceremony", "reception", "shower"] },
      { name: "Michael Vigil", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 31,
    familyName: "Quay Hosey",
    members: [{ name: "Quay Hosey", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 32,
    familyName: "Nicole Schultz & Bradly Rhodes",
    members: [
      { name: "Nicole Schultz", events: ["ceremony", "reception", "shower"] },
      { name: "Bradly Rhodes", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 33,
    familyName: "Krystal & Cory Childers",
    members: [
      { name: "Krystal Childers", events: ["ceremony", "reception", "shower"] },
      { name: "Cory Childers", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 34,
    familyName: "Kimberly & Kelton Wiggins",
    members: [
      { name: "Kimberly Wiggins", events: ["ceremony", "reception", "shower"] },
      { name: "Kelton Wiggins", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 35,
    familyName: "Jeremy & Courtney Spence",
    members: [
      { name: "Jeremy Spence", events: ["ceremony", "reception"] },
      { name: "Courtney Spence", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 36,
    familyName: "Anita Brooks",
    members: [{ name: "Anita Brooks", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 37,
    familyName: "Janet Reed",
    members: [{ name: "Janet Reed", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 38,
    familyName: "Katy & Brandon Pickens",
    members: [
      { name: "Katy Pickens", events: ["ceremony", "reception", "shower"] },
      { name: "Brandon Pickens", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 39,
    familyName: "Santana & Justin Milligan",
    members: [
      { name: "Santana Milligan", events: ["ceremony", "reception", "shower"] },
      { name: "Justin Milligan", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 40,
    familyName: "Martha & Wade Rego",
    members: [
      { name: "Martha Rego", events: ["ceremony", "reception", "shower"] },
      { name: "Wade Rego", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 41,
    familyName: "Danny Johnson",
    members: [{ name: "Danny Johnson", events: ["ceremony", "reception"] }],
  },
  {
    id: 42,
    familyName: "Joe Hillman & Cole Starr",
    members: [
      { name: "Joe Hillman", events: ["ceremony", "reception"] },
      { name: "Cole Starr", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 43,
    familyName: "Cecil & Kathy Hallmark",
    members: [
      { name: "Cecil Hallmark", events: ["ceremony", "reception"] },
      { name: "Kathy Hallmark", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 44,
    familyName: "Mike & Tara Dawson",
    members: [
      { name: "Mike Dawson", events: ["ceremony", "reception"] },
      { name: "Tara Dawson", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 45,
    familyName: "Scott & Megan Wesley",
    members: [
      { name: "Scott Wesley", events: ["ceremony", "reception"] },
      { name: "Megan Wesley", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 46,
    familyName: "Kerry & Morris Steve",
    members: [
      { name: "Kerry Steve", events: ["ceremony", "reception", "shower"] },
      { name: "Morris Steve", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 47,
    familyName: "Alex Gough",
    members: [{ name: "Alex Gough", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 48,
    familyName: "Wade Bohanon",
    members: [{ name: "Wade Bohanon", events: ["ceremony", "reception"] }],
  },
  {
    id: 49,
    familyName: "Damaris & Toby Auten",
    members: [
      { name: "Damaris Auten", events: ["ceremony", "reception"] },
      { name: "Toby Auten", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 50,
    familyName: "Kaleb Standridge",
    members: [{ name: "Kaleb Standridge", events: ["ceremony", "reception"] }],
  },
  {
    id: 51,
    familyName: "Gary & Angie Batton",
    members: [
      { name: "Gary Batton", events: ["ceremony", "reception"] },
      { name: "Angie Batton", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 52,
    familyName: "Jack & Philisha Austin",
    members: [
      { name: "Jack Austin", events: ["ceremony", "reception"] },
      { name: "Philisha Austin", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 53,
    familyName: "James & Carrie Dry",
    members: [
      { name: "James Dry", events: ["ceremony", "reception"] },
      { name: "Carrie Dry", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 54,
    familyName: "Kimberly Kaniatobe",
    members: [{ name: "Kimberly Kaniatobe", events: ["ceremony", "reception", "shower", "rehearsal"] }],
  },
  {
    id: 55,
    familyName: "Koi Kaniatobe",
    members: [{ name: "Koi Kaniatobe", events: ["ceremony", "reception", "rehearsal"] }],
  },
  {
    id: 56,
    familyName: "Kelly & Brandon Short",
    members: [
      { name: "Kelly Short", events: ["ceremony", "reception", "shower"] },
      { name: "Brandon Short", events: ["ceremony", "reception", "shower"] },
    ],
  },
  {
    id: 57,
    familyName: "Chance & Brooklyn Short",
    members: [
      { name: "Chance Short", events: ["ceremony", "reception"] },
      { name: "Brooklyn Short", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 58,
    familyName: "Autumn Hopkins",
    members: [{ name: "Autumn Hopkins", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 59,
    familyName: "Nikki Kaniatobe",
    members: [{ name: "Nikki Kaniatobe", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 60,
    familyName: "Kathy Wilson",
    members: [{ name: "Kathy Wilson", events: ["ceremony", "reception", "shower", "rehearsal"] }],
  },
  {
    id: 61,
    familyName: "Nakita Parnacher",
    members: [{ name: "Nakita Parnacher", events: ["ceremony", "reception", "shower"] }],
  },
  {
    id: 62,
    familyName: "Jordan & Maci Parnacher",
    members: [
      { name: "Jordan Parnacher", events: ["ceremony", "reception", "rehearsal"] },
      { name: "Maci Parnacher", events: ["ceremony", "reception", "rehearsal"] },
    ],
  },
  {
    id: 63,
    familyName: "Kevin & Carol Wilson",
    members: [
      { name: "Kevin Wilson", events: ["ceremony", "reception"] },
      { name: "Carol Wilson", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 64,
    familyName: "Rick & Thelma Kaniatobe",
    members: [
      { name: "Rick Kaniatobe", events: ["ceremony", "reception"] },
      { name: "Thelma Kaniatobe", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 65,
    familyName: "Ryan Hudson",
    members: [{ name: "Ryan Hudson", events: ["ceremony", "reception"] }],
  },
  {
    id: 66,
    familyName: "Lynne & Dolly",
    members: [
      { name: "Lynne", events: ["ceremony", "reception"] },
      { name: "Dolly", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 67,
    familyName: "Tina Loretto",
    members: [{ name: "Tina Loretto", events: ["ceremony", "reception"] }],
  },
  {
    id: 68,
    familyName: "Cody & Jackie Peltzer",
    members: [
      { name: "Cody Peltzer", events: ["ceremony", "reception", "rehearsal"] },
      { name: "Jackie Peltzer", events: ["ceremony", "reception", "rehearsal"] },
    ],
  },
  {
    id: 69,
    familyName: "Ben & Chasity Jackson",
    members: [
      { name: "Ben Jackson", events: ["ceremony", "reception"] },
      { name: "Chasity Jackson", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 70,
    familyName: "Maurice Clark",
    members: [{ name: "Maurice Clark", events: ["ceremony", "reception"] }],
    plusOne: true,
  },
  {
    id: 71,
    familyName: "Alan & MaryAnn Washington",
    members: [
      { name: "Alan Washington", events: ["ceremony", "reception"] },
      { name: "MaryAnn Washington", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 72,
    familyName: "Lisa Spangler",
    members: [{ name: "Lisa Spangler", events: ["ceremony", "reception"] }],
  },
  {
    id: 73,
    familyName: "Chris Peltzer",
    members: [{ name: "Chris Peltzer", events: ["ceremony", "reception"] }],
  },
  {
    id: 74,
    familyName: "Sheldon Bond",
    members: [{ name: "Sheldon Bond", events: ["ceremony", "reception", "rehearsal"] }],
  },
  {
    id: 75,
    familyName: "Nick Jackson",
    members: [{ name: "Nick Jackson", events: ["ceremony", "reception"] }],
  },
  {
    id: 76,
    familyName: "Sam & Kim Frazier",
    members: [
      { name: "Sam Frazier", events: ["ceremony", "reception"] },
      { name: "Kim Frazier", events: ["ceremony", "reception"] },
    ],
  },
  {
    id: 77,
    familyName: "Scott King",
    members: [{ name: "Scott King", events: ["ceremony", "reception"] }],
  },
  {
    id: 78,
    familyName: "Tina Prentice",
    members: [{ name: "Tina Prentice", events: ["ceremony", "reception"] }],
  },
  {
    id: 79,
    familyName: "John Feurborn",
    members: [{ name: "John Feurborn", events: ["ceremony", "reception"] }],
  },
  {
    id: 80,
    familyName: "Jeff Reirdon",
    members: [{ name: "Jeff Reirdon", events: ["ceremony", "reception"] }],
  },
  {
    id: 81,
    familyName: "AJ Johnson",
    members: [{ name: "AJ Johnson", events: ["ceremony", "reception"] }],
  },
  {
    id: 82,
    familyName: "Johnny Bates",
    members: [{ name: "Johnny Bates", events: ["ceremony", "reception"] }],
  },
  {
    id: 83,
    familyName: "Mark Mannon",
    members: [{ name: "Mark Mannon", events: ["ceremony", "reception"] }],
  },
];
