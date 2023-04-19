function onButtonClickbf() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(2, 1, 5, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");
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
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicksf() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(2, 1, 5, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");
      var record = [
        [timestamp, indexDbData[0][0], indexDbData[0][1], count, 'S'],
        [timestamp, indexDbData[1][0], indexDbData[1][1], count, 'S'],
        [timestamp, indexDbData[2][0], indexDbData[2][1], count, 'S'],
        [timestamp, indexDbData[3][0], indexDbData[3][1], count, 'S'],
        [timestamp, indexDbData[4][0], indexDbData[4][1], count, 'S']
      ];

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 5, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickb5() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(7, 1, 15, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 14; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 15, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicks5() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(7, 1, 15, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 14; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 15, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickbl() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(22, 1, 10, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 9; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 10, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicksl() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(22, 1, 10, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 9; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 10, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickbn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(32, 1, 11, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 10; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 11, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicksn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(32, 1, 11, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 10; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 11, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickbe() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(43, 1, 13, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 12; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 13, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickse() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(43, 1, 13, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 12; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 13, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickbb() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(56, 1, 11, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 10; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 11, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicksb() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(56, 1, 11, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 10; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 11, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickba() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(67, 1, 12, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 11; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 12, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClicksa() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(67, 1, 12, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 11; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 12, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickbs() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(79, 1, 13, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 12; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'B']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 13, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}

function onButtonClickss() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var indexDbSheet = ss.getSheetByName('index_db');
  var transactionRecordsSheet = ss.getSheetByName('transaction_records');

  // Get the count from the user
  var count = Browser.inputBox('Enter the count', 'Please input the count:', Browser.Buttons.OK_CANCEL);

  if (count !== 'cancel') { //&& count !== '' && count !== '0'
    if (count !== '' && count != '0'){
      var indexDbData = indexDbSheet.getRange(79, 1, 13, 2).getValues(); // Get data from index_db (rows 2 to 6, columns A and B)

      // Prepare the data to be appended to transaction_records
      var timestamp = new Date();
      var timestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MM/dd/yyyy");

      var record = [];
      for(var i = 0; i <= 12; i = i+1){
        record.push([timestamp, indexDbData[i][0], indexDbData[i][1], count, 'S']);
        }
      console.log(record);  

      // Append the data to the transaction_records sheet
      transactionRecordsSheet.getRange(transactionRecordsSheet.getLastRow() + 1, 1, 13, 5).setValues(record);

      // Display success message
      Browser.msgBox('Success', 'The data has been successfully saved in transaction_records.', Browser.Buttons.OK);
    } else{
      Browser.msgBox('Transaction failed', 'Please enter valid integer greater than 0!', Browser.Buttons.OK);
    }}
}
