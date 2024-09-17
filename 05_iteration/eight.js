//Reduce

const num = [1, 2, 3, 4, 5];
const inival = 0;


const sumNum = num.reduce((acc, crr) => {
    //}`);

    return acc + crr
}, inival);


// const sumNum = num.reduce((acc, crr) => acc + crr, inival)


// console.log(sumNum);

const shoppinngCart = [
    {
        itemName: 'javaScript',
        price: 199
    },
    {
        itemName: 'Go lang',
        price: 599
    },
    {
        itemName: 'flutter',
        price: 699
    },
    {
        itemName: 'machine learning',
        price: 1299
    }
]

const priceToPay = shoppinngCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

    console.log(priceToPay);
    