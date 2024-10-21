const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asynk task 2 compleated");

    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      userName: "SaqlainMinz",
      Email: "saqlainthestunter436@example.com",
    });
  }, 2000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ userName: "SaqlainMinz", Password: 123 });
    } else {
      reject("ERROR : something is not right");
    }
  }, 3000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((myUserName) => {
    console.log(myUserName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ language: "JavaScript", languageTwo: "React" });
    } else {
      reject("Language is not working");
    }
  }, 4000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// async function getGitHubApi(){
//     try {
//         const response=await fetch('https://api.github.com/users/SaqlainMinz');
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E "+ error);
        
//     }
// }
// getGitHubApi()

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log("ERROR: "+err);
    
})