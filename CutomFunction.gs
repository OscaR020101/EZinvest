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
  //Logger.log(chain)
  return parseFloat(chain.optionChain.result[0].quote.marketCap);
}
