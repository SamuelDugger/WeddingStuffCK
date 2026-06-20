/* ============================================================
   WEDDING GUEST & EVENT CONFIGURATION
   ============================================================
   Edit this file to manage your guest list, events, and admin password.
   - ADMIN_PASSWORD  : password to access admin.html
   - WEDDING_EVENTS  : define which events guests can RSVP for
   - GUEST_LIST      : one entry per invited party (individual or couple/family)
                       Set `events` to the event IDs that party can see/RSVP for.
                       Set `plusOne: true` if they may bring a guest.
   ============================================================ */

const ADMIN_PASSWORD = "C&K02272027";

// Paste your Google Apps Script Web App URL here after deploying Code.gs.
// Leave empty ('') to use localStorage only (local/testing mode).
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw/exec";

/* ---------- Events ----------
   Add or remove events here. Each event needs a unique `id`.
   `mealChoices` is optional — remove the array to hide the meal question.
   `deadline` is shown to guests but not enforced.
*/
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
    mealChoices: [], // empty array = no meal question
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

/* ---------- Guest List ----------
   Each entry is one RSVP "party" (individual, couple, or family).
   `name`     : Full name as it will appear on invitations (used for lookup).
                For couples/families you can list all names: "John & Jane Smith"
   `events`   : Array of event IDs this party is invited to.
   `plusOne`  : (optional) true = they may bring +1; their plus-one's name is collected on submission.
   `notes`    : (optional) Internal note visible only in the admin view.

   TIP: names are matched case-insensitively, and guests can search by
   first name, last name, or full name.
*/
const GUEST_LIST = [
  // --- Wedding only ---
  { id: 1, name: "John Smith", events: ["wedding"] },
  { id: 2, name: "Sarah Johnson", events: ["wedding"], plusOne: true },
  { id: 3, name: "Mike & Lisa Davis", events: ["wedding"] },
  {
    id: 4,
    name: "The Williams Family",
    events: ["wedding"],
    notes: "Kids allowed",
  },

  // --- Wedding + Shower ---
  { id: 5, name: "Emily Clark", events: ["wedding", "shower"] },
  { id: 6, name: "Jessica Taylor", events: ["wedding", "shower"] },
  { id: 7, name: "Amanda White", events: ["wedding", "shower"] },

  // --- Wedding + Rehearsal ---
  { id: 8, name: "Robert Brown", events: ["wedding", "rehearsal"] },
  { id: 9, name: "Tom & Karen Wilson", events: ["wedding", "rehearsal"] },

  // --- All three events ---
  { id: 10, name: "Mary Anderson", events: ["wedding", "shower", "rehearsal"] },
  {
    id: 11,
    name: "James Martinez",
    events: ["wedding", "shower", "rehearsal"],
  },
];
