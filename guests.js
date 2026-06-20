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


// Your guest list — one line per person or household.
//
// Each guest needs:
//   id     - a unique number (just count up from 1)
//   name   - exactly how it appears on their invitation
//   events - which events they're invited to (use the IDs from above)
//
// Optional:
//   plusOne: true   - add this if they're allowed to bring a guest
//   notes: "..."    - a private note only visible to you on the admin page
//
// Tip: guests search by first name, last name, or full name — spelling should match their invitation.

const GUEST_LIST = [
  // Wedding only
  { id: 1, name: "John Smith", events: ["wedding"] },
  { id: 2, name: "Sarah Johnson", events: ["wedding"], plusOne: true },
  { id: 3, name: "Mike & Lisa Davis", events: ["wedding"] },
  { id: 4, name: "The Williams Family", events: ["wedding"], notes: "Kids allowed" },

  // Wedding + Shower
  { id: 5, name: "Emily Clark", events: ["wedding", "shower"] },
  { id: 6, name: "Jessica Taylor", events: ["wedding", "shower"] },
  { id: 7, name: "Amanda White", events: ["wedding", "shower"] },

  // Wedding + Rehearsal
  { id: 8, name: "Robert Brown", events: ["wedding", "rehearsal"] },
  { id: 9, name: "Tom & Karen Wilson", events: ["wedding", "rehearsal"] },

  // All three events
  { id: 10, name: "Mary Anderson", events: ["wedding", "shower", "rehearsal"] },
  { id: 11, name: "James Martinez", events: ["wedding", "shower", "rehearsal"] },
];
