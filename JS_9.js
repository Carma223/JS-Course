// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.
// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

// Setup
const myArray = [];

let i = 5;

while( i >= 0){
  myArray.push(i);
  --i;
}

// Only change code below this line

// Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.
// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
// For loops are declared with three optional expressions separated by semicolons:
// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.
// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// Setup
const myArray2 = [];

for(let i = 1; i <= 5; ++i){
  myArray2.push(i);
}
// Only change code below this line

// Setup
const myArrayOdds = [];

for(let i = 1; i <= 10; i+= 2){
  myArrayOdds.push(i);
}

// Only change code below this line

// Setup
const myArr = [2, 3, 4, 5, 6];

// Iterate Through an Array with a For Loop

// Only change code below this line
let total = 0;

for( let i = 0; i < myArr.length; ++i ){
  total += myArr[i];
}

// Nesting For Loops
// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both 
// the array and any sub-arrays. Here is an example:

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for( let i = 0; i < arr.length; ++i ){
      for(let j = 0; j < arr[i].length; ++j ){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops
//The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of 
//the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

  // Setup
const myArrayDoWhile = [];
let d = 10;

// Only change code below this line
do{
  myArray.push(d);
  ++d;
}while(d < 5)


// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.
// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
    if( n <= 0){
      return 0; 
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
  
    // Only change code above this line
  }

//   Profile Lookup
//   We have an array of objects representing different people in our contacts lists.
//   A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
//   The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//   If both are true, then return the "value" of that property.
//   If name does not correspond to any contacts then return the string No such contact.
//   If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for( let i = 0; i < contacts.length; ++i){
      if( contacts[i].firstName === name ){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact"; 
  }
  
  lookUpProfile("Akira", "likes");
