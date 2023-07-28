// Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
//and c is the code to run when the condition returns false.
// The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

//This can be re-written using the conditional operator:

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
   }
   
   checkEqual(1, 2);



   function checkSign(num) {
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
    }
    
    checkSign(10);

//     Use Multiple Conditional (Ternary) Operators
// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
// The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }

}
// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - 
// to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
    }
    
    checkSign(10);


//Use Recursion to Create a Countdown

    function countdown(n){
        if( n < 1){
          return [];
        } else {
          let countArr = countdown(n - 1);
          countArr.unshift(n);
          return countArr;
        }
      }
      
//   Use Recursion to Create a Range of Numbers
//   Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
      
//   We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins 
//   with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
//   The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself 
//   and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

      function rangeOfNumbers(startNum, endNum) {
        if( startNum >= endNum){
          return [endNum];
        } else {
          let arrRange = rangeOfNumbers(startNum + 1, endNum);
          arrRange.unshift(startNum);
          return arrRange;
        }
      };
    