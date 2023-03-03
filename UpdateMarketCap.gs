function calculatePercentage() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // Create an object to store the total market capitalization for each category
  var categoryTotals = {};
  
  // Loop through the data and add up the market capitalizations for each category
  for (var i = 0; i < data.length; i++) {
    var category = data[i][0];
    var marketCap = data[i][3];
    
    // Skip the row if the category is null
    if (!category) {
      continue;
    }
    
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = 0;
    }
    
    categoryTotals[category] += marketCap;
  }
  
  // Loop through the data again and calculate the percentage of each asset in its category
  for (var i = 0; i < data.length; i++) {
    var category = data[i][0];
    var marketCap = data[i][3];
    
    // Skip the row if the category is null
    if (!category) {
      continue;
    }
    
    var percentage = (marketCap / categoryTotals[category]);
    
    data[i][5] = percentage;
  }
  
  // Write the calculated percentages back to the sheet
  sheet.getDataRange().setValues(data);
}