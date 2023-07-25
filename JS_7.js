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