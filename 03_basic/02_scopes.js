// never use "var" beacause it dosen't follow the scope rule.

//********** LOCAL AND GLOBAL SCOPE ***************** 

let a=300;
if (true){
    let a=10;
    const b=20;
//    console.log("INNER: "+a);
    
}

// console.log("OUTER: "+a);

//******* NESTED SCOPE **********

function one(){
    const userName ='Saqlain';
    function two(){
        console.log(userName);
        const age =20;
    }
    two();
}
one();

if(true){
    const username='saqlain';
    if (username === 'saqlain'){
        const website = 'instagram';
        console.log(username+website);
        
    }
}