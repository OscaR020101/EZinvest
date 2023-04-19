function onButtonClickb51() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(7, 1, 14, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 13; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 14, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}