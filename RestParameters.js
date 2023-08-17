function howMany(...args){
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(1,2,3));
console.log(howMany("string", null, [1,2,3], {}));

const sum = (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}