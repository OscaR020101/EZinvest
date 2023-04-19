function bringPrice() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var transaction = sheet.getSheetByName('transaction_records');
  var lastrow = transaction.getLastRow();

  for (i = 2; i <= lastrow; i++){
    var ticker = transaction.getRange("C"+i).getValue();
    var price = transaction.getRange("F"+i).getValue();
    if (price == false){
      var formula = '=GOOGLEFINANCE("'+ticker+'")';
      transaction.getRange("H"+i).setValue(formula);
      var data = transaction.getRange("H"+i).getValue();
      transaction.getRange("F"+i).setValue(data);
    }
    
  }
  //var data = transaction.getRange("H2:H").getValues();
  //transaction.getRange("F2:F").setValues(data);
}

function calculateTotal() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var transaction = sheet.getSheetByName('transaction_records');
  var lastrow = transaction.getLastRow();

  for (i = 2; i <= lastrow; i++){
    var count = transaction.getRange("D"+i).getValue();
    var price = transaction.getRange("F"+i).getValue();
    var value = transaction.getRange("G"+i).getValue();
    if (value == false){
      var formula = count * price
      transaction.getRange("G"+i).setValue(formula);
    }
  }
}

function transactionUpdate(){
  bringPrice();
  calculateTotal();
}

function avgCategory() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var porfolio = sheet.getSheetByName('category_avg_db');
  var lastrow = porfolio.getLastRow();
  var date = getLastTradingDay();

  porfolio.getRange('C1').setValue(date);
  
  for (i = 2; i <= lastrow; i++){
    var ticker = porfolio.getRange("B"+i).getValue();
    var formula = '=GOOGLEFINANCE("'+ticker+'")';
    porfolio.getRange('E'+i).setValue(formula);
    var copy = porfolio.getRange('E'+i).getValue();
    porfolio.getRange('C'+i).setValue(copy);
  }
}











