// arrray

const myArr = [0,1,2,3,4,5,6];


const myArr1 = new Array(1,2,3,4);

myArr.push(9);
myArr1.pop();

console.log("push",myArr);
console.log("pop",myArr1);

// Slice and Splice 

console.log(myArr);
const myNewArr =myArr.slice(2,5);
console.log("A",myArr);
console.log(myNewArr);

const myNewArr2 =myArr.splice(2,5);
console.log("B",myArr);
console.log(myNewArr2);





