//for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = 'hello world';

for (const greet of greetings) {
    if (greet === " ") {
        continue;
    } else {
        //console.log(`chracter is ${greet}`);
    }

}

//  Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State Of Amarica")
map.set('Fr', "France")
map.set('Fr', "France")

//console.log(map);

for (const [key,value] of map) {
  //  console.log(key+ ' : '+ value );   
}
// const myObj={
//     'game1':'Prince of percia',
//     'game2':'NFS',
//     'game3':'GTA Vice city'
// }
// for (const [key,value] of Object.entries(myObj)) {
//     console.log(myObj[key]);
    
// }