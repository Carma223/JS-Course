//JavaScript provides eight different data types wich are 
undefined 
null
boolean 
string 
symbol 
bigint 
number 
object 
//We tell JavaScript to create a variable by putting the keyword var
//in front of it, like so:
var myVariable;
/*Variable names can be made up for numbers, letters, and $ or _, but may
not contain spaces or start with a number.

In JavaScript, you can store a value in a variable with the assignment
operator =
*/
myVariable = 5;

//After a value is assigned to a variable using =, you can assign the 
//value of that variable to another variable.

myOtherVariable;

myOtherVariable = myVariable;

//It is common to initialize a variable to an initial value in the same
//line as it is declared

var myVar = 0;

//You can declare a string variable like this:

var myName = "Carlos Antonio Madrigal Trejo";

//"your name" is called a string literal. A string literal, or string
//is a series of zero or more characters enclosed in a single or double quotes.

/*When JavaScript variables are declared, they have an initial value of 
undefined. If you do a mathematical operation on an undefined variable 
your result will be NaN which means "Not a Number". If you concatenate a 
string with an undefined variable, you will get a string of undefined.*/ 

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//In JavaScript all variables and function names are case sensitive. This
//means that capitalization matters. camelCase is recommended.

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

//One of the biggest problems with declaring variables with the var keyword
//is that you can easily overwrite variable declarations.

var camper = "James";
var camper = "David";
console.log(camper); //Should display David

/*A keyword called let was introduced in ES6, a major update to 
JavaScript, to solve this potential issue with the var keyword

let truck = "James";
let truck = "David"; //Throws an error

With let a variable with the same name can only be declares once */

//Another way to declare variables is const, it works the same way as let
//the only difference is that const variables are read-only

const FAV_PET = "Cats"; //Should throw an error
FAV_PET = "Dogs";

//Should always use const for variables you dont want to reassing

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

var myNumVar = 5 + 10;
var myNumVar = 55 - 33;
var myNumVar  = 2 * 54;
var myNumvar = 40 / 55;

var i = 0;
i++; // i = i + 1;
i--; // i = i - 1;

let myVar = 10.3;

//The remainder operator % gives the remainder of the division of two numbers
//5 % 3 = 1 becuase
Math.floor( 5 / 2 ) == 2;
2 * 2 == 4;
5 - 1 == 1;
/*In mathematics, a number can be checked to be even or odd by checking the
remainder of the division of the number by 2
17 % 2 = 1; (17 is odd)
48 % 2 = 0; (48 is even)*/

//Is common to use assignments to modify the contents of a variable.

myVar = myVar + 5; //to add 5 to my var
//there are operator wich do both mathematical operation and assigment at once
let myVar = 1;
myVar += 5;
console.log(myVar);

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//In JavaScript, you can escape a quote from considering it as an end of 
//string quote by placing a backslash \ infront of the quote
const sampleStr = "Alan said, \"I'm learning js\".";

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

const conversation = 'Finn exclaims to Jake, "A la verga esta bien caro el kilo de tortillas"';

/*Escape characters
\', \", \\, \n Newline, \t Tab, \r Carriage return,
 \b Word boundary, \f Form feed"
*/

 var myStrScapes = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

 let ourStr = "I come first." + " I come second";

 let ourStr2 = "I come first. ";
 ourStr2 += "I come second.";

 //Constructing strings with variables\\
const ourName = "Carlos and Sofia";
const ourStrName = "Hello, our name is " + ourName + ", how are you?";

//Appending variables to Strings\\
const anAdjective = "awesome!";
let ourStrAdjective = "Coding is ";
ourStrAdjective += anAdjective;

//Find the lenght of a String\\
console.log("Carlos Madrigal".length);
const firstName = "Ada";
console.log(firstName.length);

//Use bracket notation to find the first character in a String\\
//Bracket notation is a way to get a character at a specific index within a string
const firstName2 = "Charles Darwin";
const firstLetter = firstName2[0];

//Understand String Immutability\\
//In JS String values are immutable, wich menas that they cannot be altered
//once created, the following code will produce an error.

let myStrError = "Bob";
myStr[0] = "J"; //wrong assigment
myStr = "Job";

//Use bracket notation to find the Nth Character in a String\\
//You can also use bracket notation to get the character at other position within a String.
const firstName3 = "Ada";
const secondLetterOfFirstName = firstName3[1];

//Use bracket notation to Find the Last Character in a String\\
const firstName4 = "Anasofuwu";
const lastLetter = firstName4[firstName4.length - 1];

//Use bracket notation to Find the Nth-to-Last Character in a String\\
const firstName5 = "Margaret Trejo";
const thirdToLastLetter = firstName5[firstName5.lenght - 3];

//Word blanks\\
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " "+ myNoun + " " + myVerb + " " + myAdverb + "." // Change this line
// Only change code above this line

//Store Multiple Values in one Variable using JavaScript Arrays\\

const sandwich = ["peanut butter", "jelly", "bread"];

// Only change code below this line
const myArray = ["league of legends" , 22];

//Nest one Array within Another Array\\

//You can also nest arrays within other arrays
const teams = [["Bulls" , 23], ["White Sox", 45]]; //Also called multi-dimensional array

//Access Array Data with Indexes\\

//Array indexes are written in the same bracket notation that strings use, they specify
//an entry in the arrey, they also use zero-based indexing
const arrayIndexes = [50, 60, 70];
console.log(array[0]);//prints 50
const data = array[1];//prints 60

//Modify Array Data With Indexes\\

//Unlike strings, the entries of arrays are mutable and can be changed freely,
//even if the array was declared with const

const ourArray = [50, 40, 30];
ourArray[0] = 15;

//Access Multi-Dimensional Arrays With Indexes\\

const arr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];

const subarray = arr[3];
const nestedSubArray = arr[3][0];
const element = arr[3][0][1];

//in this example, subarray has the value [[10,11,12],13,14], nestedSubarray
//has the value [10,11,12], and elemet has the value 11.

//Manipulate arrays with push Method\\

const arrPush = [1,2,3];
arr1.push(4);

const arrPush2 = ["Simpson", "J", "cat"];
arrPush2.push(["happy", "joy"]);
//arrPush now has te value [1,2,3,4] and arrPush2 has the value [Simpson,J,cat,[happy,joy]]. 

//Manipulate arrays with pop method\\

//.pop() removes the last element of an array and returns that element, wich means that can be stored 
const threeArr  = [1,4,6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//Manipulate arrays with shift method\\

//it does the same as .pop() with the difference that it removes the first element 
const ourArray = ["Stimpon", "J", ["Cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);

//Manipulate arrays with unshift methods\\

//It works similar to push but insted of adding an alement at the end of an array it adds it at the beginning 
const ourAnotherArray = ["Stimpson", "J", "Cat"];
ourAnotherArray.shift();
console.log(ourAnotherArray);
ourAnotherArray.reverse("First element");
console.log(ourAnotherArray);

//Shopping list\\

//Crate a multidimensional array wich contains the name of an item and its price
const shoppingList = [["Soap", 3], ["Reeses", 1], ["Gatorade", 2], ["Mirror", 5], ["Bread", 1]];

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

//Golf Code\\
/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is 
expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according 
to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if( strokes  == 1){

    return names[0];

  } else if( strokes <= par - 2 ){

    return names[1];

  } else if ( strokes == par - 1){

    return names[2];

  } else if ( strokes == par){

    return names[3];

  } else if ( strokes == par + 1){

    return names[4];

  } else if ( strokes == par + 2){
    
    return names[5];

  } else if ( strokes >= par + 3){

    return names[6];
    
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//Selecting from Many Options with Switch Statements\\
//A switch statement test a value and can have many case statements wich define various possible values.
//Statements are executed from the first matched case value until a break is encountered.

switch (lowercaseLetter){
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}

//case values are tested with strict equality (===). The break tells JS to stop executing statements.
//If the break is omitted, the next statement will be executed .
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

//Adding a default option in Switch Statements\\
//In a switch statement you may not be able to specify all possible values as case
//statements. You can add the default statement wich will be executed if no matching case satements are found.

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch( val ){
      case "a":
      answer = "apple";
      break;
      case "b":
      answer = "bird";
      break;
      case "c":
      answer = "cat";
      break;
      default:
      answer = "stuff";
      break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  //Multiple Identical Options in Switch Statements\\
  //if you have multiple inputs with the same output, you can represent them in a switch statement like this:
  let result = "";
  switch(val){
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
  }

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch( val ){
    case 1:
    case 2:
    case 3:
      answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "bob":
      answer = "Marley";
      break;
      case 42:
      answer = "The Answer";
      break;
      case 1:
      answer = "There is no #1";
      break;
      case 99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break; 
    }
    /* if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }*/
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  //Returning Boolean Values from Functions\\

  function isEqual(a,b){
    return a === b;
  }

  //Return Early Pattern for Functions\\
  //When a return statement is reached, the execution of the current function stops and control
  //returns to the calling location.
  // Setup

function abTest(a, b) {
    // Only change code below this line
  if( a < 0 || b < 0){
    return;
  }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  let count = 0;
//Counting Cards\\
/*You will write a card counting function. It will receive a card parameter, which can be a number or a
string, and increment or decrement the global count variable according to the card's value (see
table). The function will then return a string with the current count and the string Bet if the count is
positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet
or Hold) should be separated by a single space.*/

function cc(card) {
  // Only change code below this line
  let answer = "";
switch( card ){
  case 2: case 3: case 4: case 5: case 6:
  count++;
  break;
  case 10: case 'J': case 'Q': case 'K': case 'A':
  count--;
  }

  if( count > 0){
    answer = count + " Bet";
  } else if ( count <= 0 ){
    answer = count + " Hold";
  }

  return answer;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');







 
















