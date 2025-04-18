// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice.
const getComputerChoice = () => {
  // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
  // Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  // use if/else to assign a computer choice based on random number
  let computerChoice = '';

  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  console.log(computerChoice);
};
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
