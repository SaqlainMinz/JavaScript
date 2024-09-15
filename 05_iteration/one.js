// // for loop
// let i = 0;

// for (i = 0; i <= 10; i++) {
//     if (i === 5) {
//         // console.log(`5 is a best number `);
//     }
//     // console.log(i);
// }

// //Table Print 

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j}=${i * j}`);
//     }
//     console.log();

// }

// //pattern print
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();

// }

// Array

let superhero = ['superman', 'batman', 'flash', 'wonderwomen'];

for (let i = 0; i < superhero.length; i++) {
    const element = superhero[i];
    //   console.log(element);
}

for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        //console.log(`i got 10`);
        break;
    }
    //console.log(`the number is ${i}`);  
}
for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        console.log(`i got 10`);
        continue;
    }
    console.log(`the number is ${i}`);
}
