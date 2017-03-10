//Create secretNumber
var secretNumber = 4;

//Ask the user for guess
var stringGuess = Number(prompt("Guess a number"));
var guess = Number(stringGuess);

//Check if guess is right
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
//Otherwise, check if higher
else if(guess > secretNumber) {
    alert("Toooo high. Guess again!");
}

//Otherwise, check if lower
else {
    alert("Too low. Guess again :)");
}