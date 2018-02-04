// choosing a random words
// create an array for words.

var tvShows = [
  "scrubs",
  "firefly",
  "community"
];
var space;
var words = tvShows[Math.floor(Math.random() * tvShows.length)];
var wins = 0;
var hangmanAnswer = [];
var theWord = document.getElementById("currentWord")
var wrongGuesses = 0;
var letters = [];
// function for picking a random word


function startUp() {
  for (var i = 0; i < words.length; i++) {
    hangmanAnswer[i] = "_";
  }
  space = hangmanAnswer.join(" ");
  document.getElementById("currentWord").innerHTML = space;
}

function gameWin() {
  wins++;
  document.getElementById("win").innerHTML = wins;
  alert('You Win');
  startUp();
}
// function lettersGuessed() {
//   if () {
//
//   }
// }

document.onkeyup = function(event) {
  var userGuess = event.key;
  if (event.keyCode >= 65 && event.keyCode <= 90){

    console.log('first');
    for (var t = 0; t < words.length; t++) {
      if (words[t] === userGuess) {
        hangmanAnswer[t] = userGuess;
        space = hangmanAnswer.join(' ');
        document.getElementById("currentWord").innerHTML = space;
      }
      if (hangmanAnswer[t] <= 0){
        gameWin();
      };

    // Everything I have tried adds the words.lenght rather than just one to wrongGuesses.
    // else {
    //   wrongGuesses++ ;
    //   document.getElementById("guesses").innerHTML = wrongGuesses;
    // }
    };
  }
};
