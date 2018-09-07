var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  //define var with open brakets
  var bananaBunches = [];
  //have the function access store2 data and reference the sale dates that are associated wtih Banana bunches 
  bananaBunches = store2 ['sale dates']['Banana Bunches'];
  return bananaBunches;
  }
  console.log(accessesingData1());
  
// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  //define the variable 
  var bananaBunches1 = [];
  //follow the same steps as above from here. the difference is that you will return the length of the array

  bananaBunches1 = store2 ['sale dates']['Banana Bunches'];
  return bananaBunches1.length;
}
console.log(accessesingData2());
/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value.
// When you update your new variable, does the price in the store2 data change? Return your answer as 
//a boolean and write a comment on why or why not?
function updatingData1() {
  //instead of var being set to an open bracket, i am going to set the variable to directly acess the
  //inventory prices from mint wafers. 
  var mintWafers = store2 ['inventory prices']['Mint Wafers'];
  console.log(mintWafers);
  //now we are going to reassign the new variable a new value 
  var mintWafers = 1.00;
  console.log(mintWafers);
  //now I need to return may answer as a boolean (true or false) on whether or not the prices in the store2 data change
// with the if statement 
if(mintWafers === store2['inventory prices']['Mint Wafers']){
  return true;
}
else {
  return false;
}
}
console.log(updatingData1());
//The function will return false because the function did not change anything in the store2 'mint wafers' inventory prices'. The rule 
//of thumb that i use to understand this concept is that manipulating any variables within function brackets will not deconstruct the 
//variables original values 

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of
// the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2?
// Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  //just like the problem above, we are going to follow the same steps with 
  //assigning the output variable to acess the store2 data, specifically sale dates of caramel twists
  var caramelTwists = store2 ['sale dates']['Caramel Twists'];
  console.log(caramelTwists);
  //use pop to remove one of the sale dates
  caramelTwists.pop();
  console.log(caramelTwists);
  //use a boolean to tell us whether or not this function changed the original data in store2. 
  if(caramelTwists.length === store2['sale dates']['Caramel Twists'].length){
  return true;
  }
  else {
    return false;
  }
}
console.log(updatingData2());
//The pop method that we used to remove the last value in the array so out function does return true in the fact that my variable does
//match the original array 

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create 
//an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
//iterate over all the sale dates of Caramel Twists
//in each iteration we want to creat an object that contains dates 
//in each one of those objects, or dates, we want to be able to see the amount of caramel twists sold that day.

//create the output variable set it open to curly brackets. 
var soldThatDate = {};
//create a variable that accesses the store2 data, specifically the 'sale dates' of 'caramel twists' 
var saleDates = store2['sale dates']['Caramel Twists'];
// create a for loop that is going to iterate through the length of the saleDates array. 


// Iterate over store2's sale dates data to find which day had the most total 
//number of sales. Return the date with the most sales.
function loopingData2() {

}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that 
//store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
