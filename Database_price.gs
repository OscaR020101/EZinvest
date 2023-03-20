function dataArchive() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  // Move data from column G to column F
  for (var i = 2; i <= lastRow; i++) {
    var currentGValue = sheet.getRange(i, 8).getValue();
    sheet.getRange(i, 7).setValue(currentGValue);
  }
}

function getLastMonday() {
  var today = new Date();
  var monday = new Date(today);
  var daysSinceSunday = (today.getDay() + 7) % 7; // get the number of days since Sunday
  monday.setDate(today.getDate() - daysSinceSunday - 6); // subtract the number of days since Sunday and subtract 6 to get the last Monday
  var formattedDate = Utilities.formatDate(monday, Session.getScriptTimeZone(), "MM/dd/yyyy");
  return formattedDate;
}

function getLastTradingDay() {
  var today = new Date();
  var lastTradingDay;
  if (today.getDay() == 1) {
    lastTradingDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
  } else if (today.getDay() == 0) {
    lastTradingDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
  } else {
    lastTradingDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  }
  var formattedDate = Utilities.formatDate(lastTradingDay, Session.getScriptTimeZone(), "MM/dd/yyyy");
  return formattedDate;
}

function getMondayPrices() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String); // get all tickers from column B
  var startDate = getLastMonday(); // get the date of the most recent Monday
  var endDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd"); // get today's date in yyyy-MM-dd format
  for (var i = 1; i < tickers.length; i++) {
    var url = "https://query1.finance.yahoo.com/v8/finance/chart/" + tickers[i] + "?interval=1d&range=" + startDate + "_" + endDate;
    try {
      var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
      var data = JSON.parse(response.getContentText());
      if (data.chart.result == null) {
        throw new Error("No data found for " + tickers[i]);
      }
      var openPrice = data.chart.result[0].indicators.quote[0].open[0];
      sheet.getRange(i + 1, 8).setValue(openPrice); // write the opening price to column H
    } catch (e) {
      Logger.log(e.message);
      sheet.getRange(i + 1, 8).setValue("#N/A"); // write "#N/A" to column H if there's an error
    }
  }
}

function getLastClosingPrice() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String); // get all tickers from column B
  var endDate = getLastTradingDay(); // get the date of the most recent trading day
  for (var i = 0; i < tickers.length; i++) {
    if (i == 0) { // skip the first row, which should contain the header
      continue;
    }
    var url = "https://query1.finance.yahoo.com/v8/finance/chart/" + tickers[i] + "?interval=1d&range=" + endDate + "_" + endDate;
    try {
      var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
      var data = JSON.parse(response.getContentText());
      if (data.chart.result == null) {
        throw new Error("No data found for " + tickers[i]);
      }
      var closePrice = data.chart.result[0].indicators.quote[0].close[0];
      sheet.getRange(i + 1, 9).setValue(closePrice); // write the closing price to column I
    } catch (e) {
      Logger.log(e.message);
      sheet.getRange(i + 1, 9).setValue("#N/A"); // write "#N/A" to column I if there's an error
    }
  }
}

