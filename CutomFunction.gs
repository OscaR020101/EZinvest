function getSpreadsheetId() {
  var spreadsheet = SpreadsheetApp.getActive();
  Logger.log(spreadsheet.getId()); //18yo2WqoeBlSJ4ZwmgZbzJKUB-cb0ACIbuUsWKaSH6mA
}

function getPrice(ticker) {
  var ticker = ticker;
  ticker = encodeURI(ticker);
  var response = UrlFetchApp.fetch("https://query2.finance.yahoo.com/v7/finance/options/" + ticker);
  var chain = JSON.parse(response.getContentText());
  return parseFloat(chain.optionChain.result[0].quote.regularMarketPrice);
}


//index
function getMarketCap(ticker) {
  var ticker = ticker;
  ticker = encodeURI(ticker);
  var response = UrlFetchApp.fetch("https://query2.finance.yahoo.com/v7/finance/options/" + ticker);
  var chain = JSON.parse(response.getContentText());

  if (chain.optionChain && chain.optionChain.result && chain.optionChain.result[0] && chain.optionChain.result[0].quote) {
    return parseFloat(chain.optionChain.result[0].quote.marketCap);
  } else {
    return 'N/A'; // Return 'N/A' if the API response does not include the required data
  }
}


function updateMarketCap() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var numRows = dataRange.getNumRows();

  // Assuming the first row contains headers, start from the second row
  for (var i = 2; i <= numRows; i++) {
    var ticker = sheet.getRange(i, 2).getValue(); // Get the ticker from the second column
    if (ticker) {
      var marketCap = getMarketCap(ticker);
      sheet.getRange(i, 3).setValue(marketCap); // Set the market cap in the third column
    }
  }
}

function refreshSheet(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetName = sheet.getName();
  var tempName = sheetName + "_temp";

  sheet.setName(tempName);
  SpreadsheetApp.flush();
  Utilities.sleep(1000);
  sheet.setName(sheetName);

  var today = new Date();
  var formattedDate = Utilities.formatDate(today, Session.getScriptTimeZone(), "MM/dd/yyyy");
  sheet.getRange(4, 13).setValue(formattedDate);
}