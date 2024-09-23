let randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
console.log(randomNumber);

let userInput = document.getElementById("guessField");
const submit = document.querySelector("#subt");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevNum = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 0) {
    displayMessage(`Please Enter a valid number higher than 0 `);
  } else if (guess > 100) {
    displayMessage(`Please Enter a valid number lower than 100 `);
  } else if (isNaN(guess)) {
    displayMessage(`Please Enter a number`);
  } else {
    prevNum.push(guess);
    if (numGuess === 10) {
      displayGuess(`${guess}`);
      displayMessage(`Game Over, The Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations you guessed it right 🎉🎉`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is too high`);
  } else if (guess < randomNumber) {
    displayMessage(`your guess is too low`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const addNewGame = document.querySelector("#newGame");
  addNewGame.addEventListener("click", (e) => {
    e.preventDefault();
    randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
    guessSlot.innerHTML = "";
    prevNum = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled", "");
    startOver.removeChild("p");
    lowOrHi.innerHTML='';
    playGame = true;
  });
}
