/* ============================================================
   WEDDING RSVP — Google Apps Script Backend
   ============================================================
  Web app URL - https://script.google.com/macros/s/AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw/exec
  Deploymeny ID - AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw

   SETUP (one time, ~5 minutes):
   1. Go to https://script.google.com and click "New project"
   2. Delete any existing code and paste this entire file in
   3. Click the floppy-disk icon to save (name it anything)
   4. Click "Deploy" → "New deployment"
      - Type: "Web app"
      - Execute as: "Me"
      - Who has access: "Anyone"
   5. Click "Deploy" and authorize when prompted
   6. Copy the Web app URL that appears (looks like https://script.google.com/macros/s/ABC.../exec)
   7. Paste that URL into guests.js → APPS_SCRIPT_URL
   8. Done — RSVPs will now save to a Google Sheet automatically created
      in your Google Drive called "Wedding RSVPs"
   ============================================================ */

const SHEET_NAME = "RSVPs";
const SPREADSHEET_NAME = "Wedding RSVPs";

// Called when a guest submits their RSVP (POST request from rsvp.html)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    writeRsvp(data);
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// Called when admin.html loads to fetch all responses (GET request)
function doGet(e) {
  try {
    let data;
    if (e.parameter.action === "getAll") {
      data = getAllRsvps();
    } else if (e.parameter.action === "clearAll") {
      data = clearAllRsvps();
    } else {
      data = { ok: true, message: "Wedding RSVP API is running." };
    }

    // JSONP support — when a callback param is present, wrap the response so
    // it can be loaded via a <script> tag, bypassing CORS from local files.
    if (e.parameter.callback) {
      return ContentService
        .createTextOutput(e.parameter.callback + '(' + JSON.stringify(data) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return jsonResponse(data);
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// ── Delete all RSVP rows, keeping the header ──
function clearAllRsvps() {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  return { ok: true, cleared: lastRow - 1 };
}

// ── Write or update a single guest's RSVP ──
function writeRsvp(data) {
  const sheet = getOrCreateSheet();
  const values = sheet.getDataRange().getValues();

  // Check if this guest already has a row (update instead of append)
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(data.guestId)) {
      sheet
        .getRange(i + 1, 1, 1, 6)
        .setValues([
          [
            data.guestId,
            data.name,
            data.plusOneName || "",
            data.dietary || "",
            data.submittedAt,
            JSON.stringify(data.events),
          ],
        ]);
      return;
    }
  }

  // New guest — append a row
  sheet.appendRow([
    data.guestId,
    data.name,
    data.plusOneName || "",
    data.dietary || "",
    data.submittedAt,
    JSON.stringify(data.events),
  ]);
}

// ── Read all RSVPs and return as { guestId: submissionObject } ──
function getAllRsvps() {
  const sheet = getOrCreateSheet();
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return {}; // only headers, nothing submitted yet

  const result = {};
  for (let i = 1; i < values.length; i++) {
    const [guestId, name, plusOneName, dietary, submittedAt, eventsJson] =
      values[i];
    if (!guestId) continue;
    result[String(guestId)] = {
      guestId,
      name,
      plusOneName,
      dietary,
      submittedAt,
      events: JSON.parse(eventsJson || "{}"),
    };
  }
  return result;
}

// ── Get the sheet, creating it with headers if it doesn't exist ──
function getOrCreateSheet() {
  let ss;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch {
    // Script not bound to a spreadsheet — find or create one in Drive
    const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
    ss = files.hasNext()
      ? SpreadsheetApp.open(files.next())
      : SpreadsheetApp.create(SPREADSHEET_NAME);
  }

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "guestId",
      "name",
      "plusOneName",
      "dietary",
      "submittedAt",
      "eventsJson",
    ]);
    sheet.setFrozenRows(1);
    // Style the header row
    sheet
      .getRange(1, 1, 1, 6)
      .setBackground("#1a1a1a")
      .setFontColor("#c9a96e")
      .setFontWeight("bold");
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
