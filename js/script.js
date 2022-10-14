
const guessedLetters = document.querySelector (".guessed-letters");
const guessLetterButton = document.querySelector (".guess");
const guessInput = document.querySelector (".letter");
const wordInProgress = document.querySelector (".word-in-progress");
const remainingGuesses = document.querySelector (".remaining");
const remainingGuessesSpan = document.querySelector (".remaining span")
const message  = document.querySelector (".message");
const playAgainButton = document.querySelector (".play-again");

const word = "magnolia";
const guessedLettersAgain = [];

// 
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Empty message paragraph
  message.innerText = "";
  // Let's grab what was entered in the input
  const guess = letterInput.value;
  // Let's make sure that it is a single letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // We've got a letter! Let's guess!
    makeGuess(guess);
  }
  letterInput.value = "";
});

const playerInput = function (input){
    const acceptedLetter = /[a-zA-Z]/ ;
    
    if (playerInput.length == 0) {
        message.innerText ("Guess a letter. ");
    } else if (playerInput.length >1 ){
        message.innerText ("Oops. Just one letter at a time.");
    } else if (!input.match(acceptedLetter)) {
    // Did you type a number, a special character or some other non letter thing?
    message.innerText = "Please enter a letter from A to Z.";
    }    else  {
        return input;
    }
    

};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLettersAgain.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
