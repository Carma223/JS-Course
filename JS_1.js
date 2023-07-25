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

//Build JavaScript Objects\\
//Objects are similar to arrays, except that instead of using indexes to access and modify their data
//you can acces the data in objects through what are called properties. Objects are useful to store data
//in a structured way, and can represent real world objects, like a cat.

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

//In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can
//also use nombres as properties. You can even omite the quotes for single-word string properties.
const anotherObject = {
  make: "Ford",
  5: "Five",
  "model": "focus"
};









 
















