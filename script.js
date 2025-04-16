// script.js

// write a function that randomly returns “rock”, “paper” or “scissors”

// Create a new function named getComputerChoice
const getComputerChoice = () => {
  // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”

  let computerChoice = '';

  // get random number
  randomNumber = Math.floor(Math.random() * 3);
  // use if/else to return a value based on the randomly generated number
  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  }

  return computerChoice;
};

// Create a new function named getHumanChoice
const getHumanChoice = () => {
  // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

  // prompt the user to input choice
  humanChoice = prompt('Rock? Paper? Scissors? Shoot:');
};

console.log(getHumanChoice());