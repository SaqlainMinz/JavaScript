//For each dosent return the value

// const myCode = ['js','py','ruby','Go','swift'];
// myCode.forEach((item,value) => {
//     console.log(item,value);
    
// });

const myNum =[1,2,3,4,5,6,7,8,9,10];

// we use FILTER to return the value

const numReturn = myNum.filter((num)=>{
    return num > 5;
})

console.log(`the val of the num is ${numReturn}`);
