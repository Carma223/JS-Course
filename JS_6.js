//Write reusable JavaScript with functions\\

//In js we can divide our code into reusable parts called functions 
function functionName() {
    console.log("Hello world!");
}
//You can call or invoke this function by using its name followed by parentheses
functionName();

//Passing values to Functions with arguments\\

//Parameters are variables that act as placeholders for the values that are to be input to a function when its called
//The actual values that are input (or "passed") into a function when its called are known as arguments 
function testFun( param1, param2 ){
    console.log( param1, param2 );
}

testFun("I wanna play", " some league bro");

//Return a value from a function with return\\

//you can use return statement to send a value back out of a function
function plusThree(num){
    return num + 3;
}

const answer =  plusThree(6);

//Global Scope and Functions\\

//In JavaScript scope refers to the visibilty of variables, the ones that are defined otside a function block has a Global scope
//Variables wich are created without the let or const keyword are automatically created in the Global scope
//this can create unintended consequences elsewhere in the code 

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5; //doesn't use let or const so is Global automatically 
}

// Only change code above this line 

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions\\
//Variables declared within a function have local scope, they are only visible within that function

function myTest(){
    const loc = "My love";
    console.log(loc);
}
myTest();
console.log(loc); //Throws an error due const loc is not reachable 

//Global vs Local scope in functions\\
//it is possible to have both local and global variables with the same name 
//when you do this the local variables takes precedence over the global variables
const someVar = "hat";
function myFunction(){
    const someVar = "head";
    return someVar;
}
//The function will return head because the local version of the variable is present

//Understanding undefined value returned from a function\\
//When a function doesn't have a return statement the function processes the inner code but it returns an undefined value
let sum = 0;

function addSum(num){
    sum = sum + num;
}

addSum(3);

//The function will change the global variable sum but the returned value of the function is undefined 

//Assignment with a return value\\
//return statement can be used to assing a value to a variable 
let processed = 0; 

function processArg( num ){
    return (num + 3) / 5;
}

processed = processArg(7);

//Stand in line\\
//In computer science queue is an abstract data struture where items are kept in order, new items can be added at the end of the queue
//and old items are taken off from the front of the queue

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

//Use Conditional Logic with If Statements\\
function test( logicCondition ){
    if( logicCondition ){
        return "it was true";
    } else {
        return "it was false";
    }
}

test(true);
test(false);

//Comparision with equal operator\\
/*There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.The most basic operator is 
the equality operator ==.The equality operator compares two values and returns true if they're equivalent or false if they are not.*/

function equalityTest( myVal ){
    if( myVal == 10 ){
        return "Is equal to 10";
    }
    return "Is not equal to 10";
}
//In order for JavaScript to compare two different data types, it must convert one type to another. This is known as type coercion.
//Once it does, however, it can compare terms as follows:
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

//Comparison with the Strict Equality Operator\\
/*Strinct equality is the counterpart of the equality operator. However, unlike equality operator, wich attempts to convert both values being 
compared into a common type, the strict equality operator does not perform a type conversion,If the values being compared have different type,
they are considered unequal*/

3 ===  3  // true
3 === '3' // false

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(7);

//Practice comparing different values\\
function compareEquality(a, b){
    if( a === b){
        return "equal";
    }
    return "Not equal";
}

compareEquality(10, "10");

//Comparison with the Inequality Operator\\
//The inequality operator (!=) is the opposite of the equality operator.
// It means not equal and returns false where equality would return true and vice versa. 
//Like the equality operator, the inequality operator will convert data types of values while comparing.
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

function testNotEqual(val){
    if(val != 99){
        return "Not equal";
    }
    return "Equal"
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator\\
//The strict inequality operator (!==) is the logical opposite of the strict equality operator.
//It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
//The strict inequality operator will not convert data types.

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

function testStrictNotEqual(val){
    if( val !== 17){
        return "Not equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Operator\\

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

function testGreaterThan(val){
    if( val > 100){
        return "Greater than 100";
    }
    if(val > 10){
        return "Greater than 10";
    }
    return "10 or under";
}

testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator\\
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

function testGreaterOrEqual(val){
    if( val >= 20){
        return "20 or greater";
    }
    if( val >= 10){
        return "10 or greater";
    }
    return "less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator\\
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  //Comparison with the Less Than Or Equal To Operator\\
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  //Comparisons with the Logical And Operator\\
  //The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.\\
  function betweenFiveAndTen(num){
  if( num > 5){
    if(num < 10){
        return "Yes";
    }
  }
  return "No";
}

function betweenFiveAndTen(num){
    if( num > 5 && num < 10){
        return "Yes";
    }
    return "No";
    
}

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val >= 25 && val <= 50) {
      return "Yes";
    }
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  //Comparisons with the Logical Or Operator\\
  //The logical operator retrun true if either of the operands is true. Otherwise, it returns false.
  //the pattern below should look familiar from prior wayponts:
  function logicalOR(){
  if( num > 10 ){
    return "No";
  } else if( num < 5 ){
    return "No";
  }
  return "Yes";
}

function logicalOR2(){
if( num > 10 || num < 5){
    return "No";
}
return "Yes";
}

function testLogicalOr(val) {
    // Only change code below this line
  
    if( val < 10 || val > 20){
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);


  //Introducing Else Statements\\
  //With an else statement, an alternate block of code can be executed
function elseStatement(){ 
  if( num > 10 ){
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }
}

  //Introducing Else If Statement\\
  //If you have multiple condition that need to be addressed, you can chain if statements together
  //with else if statements
function elseIfStatement(){
  if( num > 15 ){
    return "Bigger than 15";
  } else if ( num < 5 ){
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
}

//Logical Order in If Else Statements\\
//Order is important in if, else if statements.\\
function foo(X){
    if (x < 1){
        return "Less than one";
    } else if ( x < 2){
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}

function bar(x) {
    if ( x < 2 ){
        return "Less than two";
    } else if ( x < 1 ){
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

foo(0) //Will return "Less than one"
bar(0) //Will return "Less than two"

//Chaining If Else Statements\\

function testSize(num) {
    // Only change code below this line
  if ( num < 5){
    return "Tiny";
  } else if ( num < 10){
    return "Small";
  } else if ( num < 15 ){
    return "Medium";
  } else if ( num < 20 ){
    return "Large";
  } else if ( num >= 20){
    return "Huge";
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);