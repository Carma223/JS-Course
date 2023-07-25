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