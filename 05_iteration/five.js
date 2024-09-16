const coding = ['js','cpp','swift','ruby','java'];

// coding.forEach(function(value){
//     console.log(value);
// })


// coding.forEach((value)=>{
//     console.log(value);
// })

const myObj =[
{
    language : "javascript",
    shortForm : "js",
},
{
    language : "cpp",
    shortForm : "c++",
},
{
    language : "python",
    shortForm : "py"
}
];

myObj.forEach((value)=>{
    console.log(value.language , value.shortForm);
    
})