//For each dosent return the value.. it can return but it take extra effort or condition

// const myCode = ['js','py','ruby','Go','swift'];
// myCode.forEach((item,value) => {
//     console.log(item,value);

// });

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we use FILTER to return the value.. we put condition in filter

const numReturn = myNum.filter((num) => {
   return num > 5;
})

//console.log(`the val of the num is ${numReturn}`);


const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => {
   return bk.publish >= 1990
})
userBooks = books.filter((bk) => {
   return bk.publish >= 1990 && bk.genre === 'History';
})
console.log(userBooks);
