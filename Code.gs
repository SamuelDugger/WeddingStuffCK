// Google Apps Script — Wedding RSVP Backend
//
// Web app URL: https://script.google.com/macros/s/AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw/exec
// Deployment ID: AKfycbyp-GueG3Hx_3_Oykki_xngNpfFG2Z04yZeSjkrHBRIab9VI8YsLWUnKUlANr-Me3r2mw
//
// After any changes to this file, redeploy:
//   Deploy > Manage deployments > pencil icon > New version > Deploy

const SHEET_NAME = "RSVPs";
const SPREADSHEET_NAME = "Wedding RSVPs";

// Runs when a guest submits their RSVP
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    writeRsvp(data);
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// Runs when the admin page loads to read all responses
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

// Deletes all RSVP rows but keeps the header row
function clearAllRsvps() {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  return { ok: true, cleared: lastRow - 1 };
}

// Saves a guest's RSVP — updates their existing row if they've submitted before
function writeRsvp(data) {
  const sheet = getOrCreateSheet();
  const values = sheet.getDataRange().getValues();

  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(data.guestId)) {
      sheet.getRange(i + 1, 1, 1, 6).setValues([[
        data.guestId,
        data.name,
        data.plusOneName || "",
        data.dietary || "",
        data.submittedAt,
        JSON.stringify(data.events),
      ]]);
      return;
    }
  }

  sheet.appendRow([
    data.guestId,
    data.name,
    data.plusOneName || "",
    data.dietary || "",
    data.submittedAt,
    JSON.stringify(data.events),
  ]);
}

// Reads all RSVPs from the sheet and returns them
function getAllRsvps() {
  const sheet = getOrCreateSheet();
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return {};

  const result = {};
  for (let i = 1; i < values.length; i++) {
    const [guestId, name, plusOneName, dietary, submittedAt, eventsJson] = values[i];
    if (!guestId) continue;
    result[String(guestId)] = {
      guestId, name, plusOneName, dietary, submittedAt,
      events: JSON.parse(eventsJson || "{}"),
    };
  }
  return result;
}

// Finds the Google Sheet, creating it automatically if it doesn't exist yet
function getOrCreateSheet() {
  let ss;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch {
    ss = null;
  }

  // When running as a standalone web app, getActiveSpreadsheet returns null
  if (!ss) {
    const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
    ss = files.hasNext()
      ? SpreadsheetApp.open(files.next())
      : SpreadsheetApp.create(SPREADSHEET_NAME);
  }

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["guestId", "name", "plusOneName", "dietary", "submittedAt", "eventsJson"]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 6)
      .setBackground("#1a1a1a")
      .setFontColor("#c9a96e")
      .setFontWeight("bold");
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
