var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
return store1 ='2015-01-08'[0][1];
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
return store1 = '2015-01-06'[1][2];
}

// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by store1 on Jan 8. 
//After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
  // make an empty variable
  var sold = []
  // add another variable that references the data specifically on our sotre_1.data.js
  // following them are the brakets with the date.
  for( var daily of store1['2015-01-08']){
    // in the 'sold' variable , we are gonna push the items in the new variable 'dailiy' to start
  // the new array
      sold.push(daily[0])
  }
// return the variable you made in the beginnign 
  return sold;
}

// Create a loop to count the total number of candies sold on Jan 10 at store1.
// Where do you have to initialize the counter variable? Why?
//My reasoning for initializing the counter variable with 0 is that the output calls 
//for a statement that returns a total number of candies sold. 

function loopingData2() {
  // create an empty variable, start it with 0
var total = 0 
// use a for of type loop t create a new variable that we called 'daily1' and it will direcrl
// associate itseld with data in var store1, and the info from the date jan 10 
for( var daily1 in store1['2015-01-10'])
// now we are going to asign the new variable 'total'  
// the info from our var daily1 
  total += daily1[2]
}
// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  // create the output variable 
  var dates = []
  //create a for loop that creates another variable that we are going to name 'daily2' that references
  //the data in store1
  for (var daily2 in store1)
  //for our new variable 'dates' we are going to PUSH the information we created in daily2
  //from store1
  dates.push(daily2)

}
//return the variable 
return dates

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  var totalCandies = 0
  for(let daily3 in store1){
    for(let merchandise of store1[daily3])
    totalCandies += daily3[2]
  }
    return totalCandies

}

// In the previous exercise, where did you have to initialize the counter variable? Why?
//
function loopingData5() {
  return 'Answer'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
