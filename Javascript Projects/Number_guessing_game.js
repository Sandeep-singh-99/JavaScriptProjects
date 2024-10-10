const prompt = require("prompt-sync")();

console.log(
  "Hi welcome to the game, This is a number guessing game. You got 7 chances to guess the number. Let's start the game."
);

var number_to_guess = Math.floor(Math.random() * 100);

var chances = 7;

var guess_counter = 0;

while (guess_counter < chances) {
  guess_counter += 1;
  var my_guess = Number(prompt("Please Enter your guess: "));

  if (my_guess === number_to_guess) {
    console.log(
      `The number is ${number_to_guess} and you found it right !! in the ${guess_counter} attempt`
    );
    break;
  } else if (guess_counter >= chances && my_guess != number_to_guess) {
    console.log(
      `Oops sorry, The number is ${number_to_guess} better luck next time`
    );
  } else if (my_guess > number_to_guess) {
    console.log("Your guess is higher ");
  } else if (my_guess < number_to_guess) {
    console.log("Your guess is lower ");
  }
}
