// Add a custom menu to the Google Sheet
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Custom Functions');
  menu.addItem('Update Market Cap', 'updateMarketCap');
  menu.addToUi();
}

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