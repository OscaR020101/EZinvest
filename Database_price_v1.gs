
function getMostRecentMonday() {
  var today = new Date();
  var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  
  // Check if it is Tuesday
  if (today.getDay() === 2) {
    var formattedDate = Utilities.formatDate(yesterday, Session.getScriptTimeZone(), "MM/dd/yyyy");
    Logger.log(formattedDate);
    return formattedDate;
  } else {
    throw new Error("This function should only be run on a Tuesday.");
  }
}




function getLastTradingDay() {//This is the most recent close date(we will use for trading)
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
  //Logger.log(formattedDate);
  return formattedDate;
}

function getTwoPrevious() {
  var lastTradingDay = new Date(getLastTradingDay());
  var prevTradingDay = new Date(lastTradingDay.getFullYear(), lastTradingDay.getMonth(), lastTradingDay.getDate() - 1)
  var formattedDate = Utilities.formatDate(prevTradingDay, Session.getScriptTimeZone(), "MM/dd/yyyy");
  //Logger.log(formattedDate);
  return formattedDate;
}


function getMondayPrices() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String); // get all tickers from column B
  var startDate = "04/03/2023"; // get the date of the most recent Monday
  var endDate = "04/03/2023"; // get today's date in yyyy-MM-dd format
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
///OPTIONAL
function getLastMondayPrices() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String); // get all tickers from column B
  var startDate = '03/27/2023'; // input the last monday's date
  var endDate = '03/27/2023';
  for (var i = 1; i < tickers.length; i++) {
    var url = "https://query1.finance.yahoo.com/v8/finance/chart/" + tickers[i] + "?interval=1d&range=" + startDate + "_" + endDate;
    try {
      var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
      var data = JSON.parse(response.getContentText());
      if (data.chart.result == null) {
        throw new Error("No data found for " + tickers[i]);
      }
      var openPrice = data.chart.result[0].indicators.quote[0].open[0];
      sheet.getRange(i + 1, 7).setValue(openPrice); // write the opening price to column H
    } catch (e) {
      Logger.log(e.message);
      sheet.getRange(i + 1, 7).setValue("#N/A"); // write "#N/A" to column H if there's an error
    }
  }
}

function getLastClosingPrice() {//This is the most recent close price(we will use for trading)
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
      sheet.getRange(i + 1, 10).setValue(closePrice); // write the closing price to column I
    } catch (e) {
      Logger.log(e.message);
      sheet.getRange(i + 1, 10).setValue("#N/A"); // write "#N/A" to column I if there's an error
    }
  }
}
//Monday Update
function dataArchive() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("index_db"); 
  //moving the date from H -> G
  var data = sheet.getRange("H2:H89").getValues();
  sheet.getRange("G2:G89").setValues(data);
  //moving Monday date
  var date = sheet.getRange("P3").getValue();
  sheet.getRange("O3").setValue(date);
}

function setRecentMonday() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("index_db"); 
  dataArchive();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String);

  for (var i = 2; i < tickers.length; i++) {
    var cell = sheet.getRange("H"+i); 
    var formula = '=INDEX(GOOGLEFINANCE(B'+i+',"PRICE",$P$3),2,2)';
    cell.setFormula(formula);
  }

}

//DAILY
function dataArchive2() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("index_db"); 
  //moving the date from J -> I
  var data = sheet.getRange("J2:J89").getValues();
  sheet.getRange("I2:I89").setValues(data);
}

function setRecentToday() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("index_db"); 
  //dataArchive2();
  var tickers = sheet.getRange("B:B").getValues().flat().filter(String);

  for (var i = 2; i <= tickers.length; i++) {
    var cell = sheet.getRange("J"+i); 
    var formula = '=INDEX(GOOGLEFINANCE(B'+i+',"PRICE",$R$3),2,2)';
    cell.setFormula(formula);
    var cell = sheet.getRange("J"+i);
    //if (cell.getValue()=="#N/A") {
    //  var formula = '=INDEX(GOOGLEFINANCE(B'+i+'))';
    //  cell.setFormula(formula);
   // }
  }
}

