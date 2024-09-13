// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "name";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);
const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstname: "saqlain",
            lastname: "Minz"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastname);


//merging two or more obj
const obj1 ={ 1: "a", 2: "b"};
const obj2 ={ 3: "a", 4: "b"};

// const obj3={obj1,obj2};//not so applicable 

// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2};
console.log(obj3);


// from database

const user = [
    {
        name:'saqlain',
        age :20,
        email :'saminz@gmail.com'
    },
    {
        name:'saqlain',
        age :20,
        email :'saminz@gmail.com'
    },
    {
        name:'saqlain',
        age :20,
        email :'saminz@gmail.com'
    },
    {
        name:'saqlain',
        age :20,
        email :'saminz@gmail.com'
    },
]
user[1].email;


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//to check the property is available or not
console.log(tinderUser.hasOwnProperty('isLogged'));


