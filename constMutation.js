const s = [5,6,7];
//s = [1,2,3]; throws an error due s cannot point to another array
s[2] = 45;
console.log(s);

const s = [5,7,2];

function editInPlace(){
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();
