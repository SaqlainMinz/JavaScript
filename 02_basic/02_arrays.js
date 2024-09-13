const marvel_heroes = ["ironman", "thor", "hulk"];
const dc_heroes = ["flash", "superman", "aquaman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const hero = marvel_heroes.concat(dc_heroes);
// console.log(hero);

//spread operator

const allHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allHeroes);


console.log(Array.isArray('Saqlain'));
console.log(Array.from('Saqlain'));
console.log(Array.from({ name: 'Saqlain' }));//empty array (intresting)

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



