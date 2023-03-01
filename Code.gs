function myFunction() {
  Logger.log('hi')
}

function getPrice(ticker) {
  var ticker = ticker;
  ticker = encodeURI(ticker);
  var response = UrlFetchApp.fetch("https://query2.finance.yahoo.com/v7/finance/options/" + ticker);
  var chain = JSON.parse(response.getContentText());
  return parseFloat(chain.optionChain.result[0].quote.regularMarketPrice);
}

