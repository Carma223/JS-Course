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

 //Constructing strings with variables
const ourName = "Carlos and Sofia";
const ourStrName = "Hello, our name is " + ourName + ", how are you?";

//Appending variables to Strings
const anAdjective = "awesome!";
let ourStrAdjective = "Coding is ";
ourStrAdjective += anAdjective;

//Find the lenght of a String
console.log("Carlos Madrigal".length);
const firstName = "Ada";
console.log(firstName.length);

//Use bracket notation to find the first character in a String
//Bracket notation is a way to get a character at a specific index within a string
const firstName2 = "Charles Darwin";
const firstLetter = firstName2[0];

//Understand String Immutability
//In JS String values are immutable, wich menas that they cannot be altered
//once created, the following code will produce an error.

let myStrError = "Bob";
myStr[0] = "J"; //wrong assigment
myStr = "Job";

//Use bracket notation to find the Nth Character in a String
//You can also use bracket notation to get the character at other position within a String.
const firstName3 = "Ada";
const secondLetterOfFirstName = firstName3[1];

//Use bracket notation to Find the Last Character in a String
const firstName4 = "Anasofuwu";
const lastLetter = firstName4[firstName4.length - 1];

//Use bracket notation to Find the Nth-to-Last Character in a String
const firstName5 = "Margaret Trejo";
const thirdToLastLetter = firstName5[firstName5.lenght - 3];

//Word blanks
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " "+ myNoun + " " + myVerb + " " + myAdverb + "." // Change this line
// Only change code above this line

//Store Multiple Values in one Variable using JavaScript Arrays

const sandwich = ["peanut butter", "jelly", "bread"];

// Only change code below this line
const myArray = ["league of legends" , 22];

//Nest one Array within Another Array
//You can also nest arrays within other arrays
const teams = [["Bulls" , 23], ["White Sox", 45]]; //Also called multi-dimensional array

//Access Array Data with Indexes
//Array indexes are written in the same bracket notation that strings use, they specify
//an entry in the arrey, they also use zero-based indexing
const arrayIndexes = [50, 60, 70];
console.log(array[0]);//prints 50
const data = array[1];//prints 60

//Modify Array Data With Indexes
//Unlike strings, the entries of arrays are mutable and can be changed freely,
//even if the array was declared with const

const ourArray = [50, 40, 30];
ourArray[0] = 15;

//Access Multi-Dimensional Arrays With Indexes

const arr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];

const subarray = arr[3];
const nestedSubArray = arr[3][0];
const element = arr[3][0][1];

//in this example, subarray has the value [[10,11,12],13,14], nestedSubarray
//has the value [10,11,12], and elemet has the value 11.

//Manipulate arrays with push Method

const arrPush = [1,2,3];
arr1.push(4);

const arrPush2 = ["Simpson", "J", "cat"];
arrPush2.push(["happy", "joy"]);
//arrPush no has te value [1,2,3,4] and arrPush2 has the value [Simpson,J,cat,[happy,joy]]. 











