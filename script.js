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
  return humanChoice;
};

// Create two new variables named humanScore and computerScore in the global scope
// Initialize those variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice.
const playRound = (humanChoice, computerChoice) => {
  // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
  caseInsensitiveHumanChoice = humanChoice.toLowerCase();

  // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (caseInsensitiveHumanChoice === 'rock' &&
      computerChoice === 'scissors') ||
    (caseInsensitiveHumanChoice === 'paper' &&
      computerChoice === 'rock') ||
    (caseInsensitiveHumanChoice === 'scissors' &&
      computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
};

playRound(getHumanChoice(), getComputerChoice());
