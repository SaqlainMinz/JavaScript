// Immediately Invoked Function Expression (IIFE)

//normal function

function cup(){
    console.log(`pour some coffee`)
}
// cup();

//IIFE===It is used to solve the issue of global scope pollution
//=====Named IIFE
(function coffee(){
    console.log(`black coffee`);
})();
//======Simple IIFE
((name)=>{
    console.log(`Brand of the coffee is ${name}`);
    
})('bru');