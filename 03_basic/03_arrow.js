const user ={
    username : 'saqlain',
    price : 200,
    wlecomeMessage : function(){
        console.log(`Hi ${this.username}`)
        console.log(this);
        
    }
}
// console.log(this);

user.wlecomeMessage()
//different type of write a function

// function addTwo(){
//     // we can call this function anywhere in the program
//     return num1+num2;
// }

// const addTwo =function(num1,num2){
//     // we can call this below the function 
//     return num1+num2;
// }


/*****Arrow Function********* */

// different type to write arrow function


// const addTwo =(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo =(num1,num2)=>num1+num2;


// const addTwo =(num1,num2)=>(num1+num2);

//----- For Object
 const forObj =()=>({name:'saqlain'})

 console.log(forObj());
 


