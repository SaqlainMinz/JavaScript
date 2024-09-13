// object literals
const sym = Symbol('newSym');
const jsUser = {
    name: 'saqlain',
    "full name": 'saqlain Anish Minz',
    [sym]: "mewkey1",
    age: 25,
    location: "Rourkela",
    email: "saqlainthestunter212@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Tuesday", "Wednesday"]

};
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(sym);
console.log(jsUser[sym]);


// value override 
jsUser.email="saqlainminz@gmail.com"


// object freeze
// Object.freeze(jsUser);
jsUser.email="minzsaqlain@gmail.com";
console.log(jsUser);

//adding function in obj

jsUser.greeting = function(){
    console.log("hello my dear friend");
    
}

jsUser.wkawaka = function(){
    console.log(`hello my dear friend ${this["full name"]}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.wkawaka());

