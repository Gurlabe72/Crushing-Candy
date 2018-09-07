var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
// return a statement that accesses the information in store3, goes down to index[1] which was january 7, references the 'inventory sold' of the 
//'berry bites' 
return store3[1]['inventory sold']['Berry Bites'];
}
accessesingData1(store3);

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
//return a statement that accesses that information in store3, goes down to index[3] which was january 9m references the 'inventory sold'
//'mint wafers' 
return store3[3]['Inventory Sold']['Mint Wafers'];
}
accessesingData2(store3); 

// Return total number of dates included in the dataset.
function accessesingData3() {

}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  //create a loop to iterate through the sale data in store3
  //through each iteration, return the dates 

  //establish output array and define it with open brackets
  let dateArray = [];
  //create a for loop that iterates through the length of the store3 array. 
  for(let i = 0; i < store3.length; i++){
    //through each iteration in the new output array 'dateArray' we are going to push over all the dates that are taken out of the dates in
    //store 3. 
    dateArray.push(store3[i].date)
  }
//return the new output 
return dateArray;
}
//check answer
loopingData1();

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
//define our result variable with curly brackets 
//define out output varible for the price 
let result = {};
let pride = [];
//we want to access the store3 data, specifically indexing the date january 10th and extracting the 'inventory sold'
store3data = store3[4]['inventory sold']
//create a for loop that will input the information in the store3Data  and push the price of each inventory 
//into a new array 
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  //initialize our output variable to 0
  let result = 0
  //create a for loop that with iterate through the length of the store3 array and that will access the 'inventory sold' in the 'peanut butter buttered peanuts'
  //in the form of a quantity using dot notation. 
  for( let i = 0; i < store3.length; i++){
    result += store3[i]['inventory sold']['Peanut Butter Buttered Peanuts'].quantity
  }
return result
}
loopingData3();

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
