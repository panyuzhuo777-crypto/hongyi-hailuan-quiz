const SPREADSHEET_ID = "1gRP1AOeuNfii8__D2az9Uhqy6XdTgiCNgdSprH0q0_o";
const SHEET_NAME = "自動提交結果";

const HEADERS = [
  "提交時間",
  "本機時間",
  "玩家姓名",
  "角色性別",
  "主匹配角色",
  "MATCH",
  "鄭森",
  "田川七左衛門",
  "羅賓",
  "泰雅",
  "阿美",
  "伊莎貝拉",
  "焉遲落",
  "頁面URL",
  "瀏覽器",
  "答題明細JSON",
  "完整資料JSON"
];

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: "hongyi-role-quiz" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payloadText = e && e.parameter && e.parameter.payload ? e.parameter.payload : "{}";
    const payload = JSON.parse(payloadText);
    const sheet = getSheet_();
    const percents = payload.allPercents || {};

    sheet.appendRow([
      new Date(),
      payload.localTime || "",
      payload.playerName || "",
      payload.genderLabel || payload.gender || "",
      payload.winnerRole || "",
      formatPercent_(payload.matchPercent),
      formatPercent_(getPercent_(percents, "鄭森", "郑森")),
      formatPercent_(getPercent_(percents, "田川七左衛門", "田川七左卫门")),
      formatPercent_(getPercent_(percents, "羅賓", "罗宾")),
      formatPercent_(percents["泰雅"]),
      formatPercent_(percents["阿美"]),
      formatPercent_(getPercent_(percents, "伊莎貝拉", "伊莎贝拉")),
      formatPercent_(getPercent_(percents, "焉遲落", "焉迟落")),
      payload.pageUrl || "",
      payload.userAgent || "",
      JSON.stringify(payload.answers || []),
      JSON.stringify(payload)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function formatPercent_(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }
  return `${value}%`;
}

function getPercent_(percents, role, legacyRole) {
  if (percents[role] !== undefined) return percents[role];
  return percents[legacyRole];
}
