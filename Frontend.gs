function homeButton() {
  goToSheet("Home");
}

function marketWatchButton() {
  goToSheet("Market Watch");
}

function buySellButton() {
  goToSheet("Buy/Sell");
}


function goToSheet(sheetName) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  SpreadsheetApp.setActiveSheet(sheet);
}