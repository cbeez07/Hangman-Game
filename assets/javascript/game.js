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
var gameHasStarted = false;

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
  gameHasStarted = true;
  $('#image').empty();
  $('#startup').hide();
}

function gameLoss() {
  console.log('one');
  $('#image').prepend('<img id = theImage src = "assets/images/you-lose.jpeg" />');
  $('#startup').show();
  gameHasStarted = false;
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
    $('#image').prepend('<img id = theImage src = "assets/images/you-win.jpeg" />');
    $('#startup').show();
    gameHasStarted = false;
  }
}

document.onkeyup = function(event) {
  userGuess = event.key;
  if (gameHasStarted === false) {
    startUp();
  }
  else if (isAlpha(event.key)) {
    if (words.indexOf(userGuess) !== -1) {
      correctGuess();
      checkGameWin();
    }
    else if (lettersUsersGuessed.indexOf(userGuess) === -1) {
      wrongGuessesLeft();
      lettersGuessed();
    }
  };
};
