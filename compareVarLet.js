let printNumTwo;

for(let i = 0; i < 3; ++i){
    if(i === 2){
        printNumTwo = function(){
            return i; 
        }
    }
}

console.log(printNumTwo());
console.log(i);

function checkScope(){
    let i = 'function scope';
    if(true){
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope is: ', i);
    
    return i;
}