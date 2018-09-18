var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
return store4['Dark Chocolate Crunchies']['cost'];
}
accessesingData1();
// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
return store4['Berry Bites']['sold on'].length
}
accessesingData2();

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  //creat output variable equail to an array  
  let result = []
  //we want the function to be able to tell us the NAME of the candy that costs more that 2 dollars 
  let candyArr = Object.keys(store4)
  //to acess the names in the Candy array
  for(let candyNames in candyArr){
    //if the cost of the candy that we are identifying by name is more than 2 dollars 
  
    if(store4[candyArr[candyNames]]['cost'] > 2){
      //we want to push it to our result array.
      result.push(candyArr[candyNames])
    }
  }
  return result
  }
  loopingData1()

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  //we want our output variable equal to an object so we set it equal to curly brackets 
  let result = {}
  //in the object, we are going to have each candy defined by name and they will also spit out the cost of that item along with it 
  let names = Object.keys(store4)
  //cost is defined as an array in our output 
  let cost = []
//we are going to iterate through the information in store 4 
  for(let i in store4){

    //this function will push us the cost of each candy name in the COST array 
    cost.push(store4[i]['cost'])
  }
  //in the results object, the function will pull out each of the names of each of the costs that we pulled out earlier 
  for( let i in names){
    result[names[i]] = cost[i]
  }
  return result
  }
  loopingData2()

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {

}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
