// You may have heard the term object before.
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
// Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
//In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
// Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
// You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
const myDog = {
    // Only change code below this line
  "name": "Fifo",
  "legs": 5,
  "tails": 7,
  "friends": ["Nami", "Blacky"]
    // Only change code above this line
  };

//   Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
// Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;

// const prop2val = myObj.prop2;
// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.
// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
  
//   Accessing Object Properties with Bracket Notation
// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
// However, you can still use bracket notation on object properties without spaces.
// Here is a sample of using bracket notation to read an object's property:

const myObjExample = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"];

// would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.
// Note that property names with spaces in them must be in quotes (single or double).
// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
  
// Setup
  const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  // Only change code below this line
  const entreeValue = testObj2['an entree'];   // Change this line
  const drinkValue = testObj2['the drink'];    // Change this line

//   Accessing Object Properties with Variables
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
// Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDoggy = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

// The string Doberman would be displayed in the console.
// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.


// Updating Object Properties
// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

// Setup
const myDogo = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDogo.name = "Happy Coder";

//   Add New Properties to a JavaScript Object
//   You can add new properties to existing JavaScript objects the same way you would modify them.
//   Here's how we would add a bark property to ourDog:

  const myDogger = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDogger.bark = "woof";
  myDogger["color"] = "gray";

//Here's the way to delete an object property

delete myDogger.name;

// Using Objects for Lookups
// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
// Here is an example of an article object:

const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  
  const value = "title";
  const valueLookup = article[value];

//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = { "alpha": "Adams",
        "bravo":"Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

//   Testing Objects for Properties
//To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. 
//someObject.hasOwnProperty(someProperty)
//returns true or false depending on if the property is found on the object or not.

  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }
  
//   Manipulating Complex Objects
//Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data.
//They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// Here's an example of a complex data structure:

  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Lady Gaga",
      "title": "Born this way",
      "release_year": 2007,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

//Accessing Nested Objects
//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

//Here is a nested object:

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

//   Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays.
// Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
// Here is an example of how to access a nested array:

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

//   The updateRecords function takes 4 arguments represented by the following function parameters:

//   records - an object containing several individual albums
//   id - a number representing a specific album in the records object
//   prop - a string representing the name of the album’s property to update
//   value - a string containing the information used to update the album’s property
//   Complete the function using the rules below to modify the object passed to the function.
  
//   Your function must always return the entire records object.
//   If value is an empty string, delete the given prop property from the album.
//   If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//   If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
//   Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
  // Setup
 // Setup
 
 const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if( value == ""){
      delete records[id][prop];
    }
  
    if( prop !== "tracks" && value !== ""){
      records[id][prop] = value;
    }
  
    if( prop === "tracks" && value !== ""){
      if(!records[id].hasOwnProperty(prop))
        records[id][prop] = [];
      records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
  