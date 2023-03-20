function onButtonClick() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel' && count !== '') {
    var indexDbData = indexDbSheet.getRange(2, 1, 5, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

    // Prepare the data to be appended to transaction_records
    var timestamp = Math.floor(new Date().getTime() / 1000); // Get the current timestamp in seconds
    var record = [
      [timestamp, indexDbData[0][0], indexDbData[0][1], count, 'B'],
      [timestamp, indexDbData[1][0], indexDbData[1][1], count, 'B'],
      [timestamp, indexDbData[2][0], indexDbData[2][1], count, 'B'],
      [timestamp, indexDbData[3][0], indexDbData[3][1], count, 'B'],
      [timestamp, indexDbData[4][0], indexDbData[4][1], count, 'B']
    ];

    // Append the data to the transaction_records sheet
    transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 5, 5).setValues(record);

    // Display success message
    Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
  }
}
