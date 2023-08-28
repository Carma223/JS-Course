const [a,b] = [1,2,3,4,5,6];
console.log(a,b);

const [e,f,,,g] = [1,3,4,5,6,6];
console.log(e,f,g); // 1,3,6

let r = 8, c = 6;
[r,c] = [c,r]; //swapping variables values

