function myName(){
    console.log('s');
    console.log('a');
    console.log('q');
    console.log('l');
    console.log('a');
    console.log('i');
    console.log('n');
    
}
// myName();


// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    const result = number1+number2;
    return result;
}
const result= addTwoNumber(5,6);
// console.log(result);

function loginUserMessage(username){
    if(username===undefined){
        return `please enter your user name.`;
    }
   
    return `Hi ${username} you are just logged in.`
}
// console.log(loginUserMessage());


 function calculayeCartPrice(val1,val2,...num1){
    return num1;
 }
// console.log(calculayeCartPrice(100,200,300,1000));

const user ={
    username:"saqlain",
    price: 1999
}

 function handleObject(anyObj){
   console.log(`username is ${anyObj.username} and the price is ${anyObj.price}`)
 }

//   (handleObject(user));

handleObject({
    username:"Anish",
    price:"2597"
})
 
const myNewArray=[200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,800,600]));
