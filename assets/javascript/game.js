// naming all my variables

var animals = [
  "dog",
  "cat",
  "hippopotamus",
  "ostrich",
  "elephant",
  "emu",
  "giraffe",
  "rabbit",
  "zebra",
  "newt",
  "kangaroo"
];
var space;
var words;
var wins = 0;
var hangmanAnswer = [];
var theWord = document.getElementById("currentWord")
var guessesLeft = 7;
var lettersUsersGuessed = [];
var userGuess;

var isAlpha = function(ch){
  return /^[A-Z]$/i.test(ch);
}



// function to start the game
function startUp() {
  hangmanAnswer = [];
  words = animals[Math.floor(Math.random() * animals.length)];
  for (var i = 0; i < words.length; i++) {
    hangmanAnswer[i] = "_";
  }
  space = hangmanAnswer.join(" ");
  document.getElementById("currentWord").innerHTML = space;
  lettersUsersGuessed = [];
  guessesLeft = 7;
  document.getElementById('guesses').innerHTML = guessesLeft;
  document.getElementById('letters').innerHTML = lettersUsersGuessed;
  document.getElementById("win").innerHTML = wins;
}

function gameLoss() {
  alert('You have lost! The animal was ' + words);
  startUp();
}

function wrongGuessesLeft() {
  --guessesLeft;
  document.getElementById('guesses').innerHTML = guessesLeft;
    if (guessesLeft < 1) {
      gameLoss();
    }
}

function lettersGuessed() {
  lettersUsersGuessed.push(userGuess);
  document.getElementById('letters').innerHTML = lettersUsersGuessed;
}

function correctGuess() {
  for (var t = 0; t < words.length; t++) {
    if (words[t] === userGuess) {
      hangmanAnswer[t] = userGuess;
      space = hangmanAnswer.join(' ');
      document.getElementById("currentWord").innerHTML = space;

    }
  }
}

function checkGameWin() {
  if (hangmanAnswer.indexOf("_") === -1) {
    wins++;
    alert('You Win!! The animal is ' + words);
    startUp();
  }
}

document.onkeyup = function(event) {
  userGuess = event.key;
  if (isAlpha(event.key)) {

  
  // if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (words.indexOf(userGuess) !== -1) {
      // console.log(first);
      correctGuess();
      checkGameWin();
    }
    else if (lettersUsersGuessed.indexOf(userGuess) === -1) {
      wrongGuessesLeft();
      lettersGuessed();
    }
  };
};
    // User guessed correctly


// Get user's guess
// For Each blank
//   if guess is correct
// if letter isnt in guessedLetters
//   add letter to guessedLetters
//   subtract from guesses
