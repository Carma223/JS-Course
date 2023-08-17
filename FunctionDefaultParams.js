const greeting = (personName = "Anonymous") => "Hello " + personName;

console.log(greeting("John")); //Hello John
console.log(greeting()); //Hello Anonymous

const increment = (number, value = 1) => number + value;