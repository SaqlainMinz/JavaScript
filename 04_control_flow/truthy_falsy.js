//const email='saminz@mail.com';

// const email="";

const email = [];

// if (email) {
//     console.log('got the email');

// }
// else {
//     console.log(`did not got the email`);

// }

/*

falsy values : 
false, 0, -0, Bigint 0n , "" , null , undefined, NaN
            
Truthy values :
"0", " ", "false", [], {}, function(){},  
*/

// To check empty Array

if(email.length===0){
    console.log('this is an empty aarray');
    
}
// to check emptyu object
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log('this is an empty object');
    
}