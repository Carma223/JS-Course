const [ a, b, ...arr] = [1,2,3,4,5,6];
console.log(a,b);//1,2
console.log(arr);//[3,4,5,6]

function removeFirstTwo(list){
    const [,,...shorterList] = list;

    return shorterList;
}
 
const source = [1,2,3,4,5,6,7,8,9,10];

const sourceWithoutFirstTwo = removeFirstTwo(source);

