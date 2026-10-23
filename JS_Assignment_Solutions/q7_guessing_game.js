// Q7. Smart Guessing Game (Number Range)
const secretNumber = Math.floor(Math.random() * 50) + 1; // 1 to 50
const userGuess = 25; // test value

console.log(`Your guess: ${userGuess}`); 
console.log(`(Secret number: ${secretNumber})`); // shown for testing

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // Not equal: check closeness first
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
