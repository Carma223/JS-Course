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