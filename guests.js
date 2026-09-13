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
  wedding: {
    id: "wedding",
    label: "Wedding Ceremony & Reception",
    date: "Saturday, February 27, 2027",
    time: "5:00 PM ceremony · 7:00 PM reception",
    location: "Venue Name TBD, Newcastle, OK",
    mealChoices: ["Chicken", "Beef", "Vegetarian", "No preference"],
    deadline: "January 27, 2027",
  },
  shower: {
    id: "shower",
    label: "Wedding Shower",
    date: "Date TBD",
    time: "Time TBD",
    location: "Location TBD",
    mealChoices: [],
    deadline: "TBD",
  },
  rehearsal: {
    id: "rehearsal",
    label: "Rehearsal Dinner",
    date: "Friday, February 26, 2027",
    time: "Time TBD",
    location: "Location TBD",
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
// one member — see "John Smith" below.
//
// Tip: guests can search by the household name OR by any member's first or
// last name — spelling should match the invitation.

const GUEST_LIST = [
  // A single guest, invited to the wedding only
  {
    id: 1,
    familyName: "John Smith",
    members: [{ name: "John Smith", events: ["wedding"] }],
  },

  // A single guest who's allowed to bring someone
  {
    id: 2,
    familyName: "Sarah Johnson",
    members: [{ name: "Sarah Johnson", events: ["wedding"] }],
    plusOne: true,
  },

  // A couple — each person RSVPs individually, but they'll usually show up
  // together when searched
  {
    id: 3,
    familyName: "Mike & Lisa Davis",
    members: [
      { name: "Mike Davis", events: ["wedding"] },
      { name: "Lisa Davis", events: ["wedding"] },
    ],
  },

  // A whole family — kids included, each as their own member
  {
    id: 4,
    familyName: "The Williams Family",
    members: [
      { name: "Tom Williams", events: ["wedding"] },
      { name: "Sara Williams", events: ["wedding"] },
      { name: "Ella Williams", events: ["wedding"] },
    ],
    notes: "Kids allowed",
  },

  // Wedding + Shower
  {
    id: 5,
    familyName: "Emily Clark",
    members: [{ name: "Emily Clark", events: ["wedding", "shower"] }],
  },
  {
    id: 6,
    familyName: "Jessica Taylor",
    members: [{ name: "Jessica Taylor", events: ["wedding", "shower"] }],
  },
  {
    id: 7,
    familyName: "Amanda White",
    members: [{ name: "Amanda White", events: ["wedding", "shower"] }],
  },

  // Wedding + Rehearsal
  {
    id: 8,
    familyName: "Robert Brown",
    members: [{ name: "Robert Brown", events: ["wedding", "rehearsal"] }],
  },
  {
    id: 9,
    familyName: "Tom & Karen Wilson",
    members: [
      { name: "Tom Wilson", events: ["wedding", "rehearsal"] },
      { name: "Karen Wilson", events: ["wedding", "rehearsal"] },
    ],
  },

  // All three events — a household where each person's access differs:
  // Mary is invited to everything, James is only invited to the wedding.
  {
    id: 10,
    familyName: "Mary & James Anderson",
    members: [
      { name: "Mary Anderson", events: ["wedding", "shower", "rehearsal"] },
      { name: "James Anderson", events: ["wedding"] },
    ],
  },
  {
    id: 11,
    familyName: "James Martinez",
    members: [
      { name: "James Martinez", events: ["wedding", "shower", "rehearsal"] },
    ],
  },
];
