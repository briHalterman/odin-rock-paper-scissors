// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

// Create a new function named getComputerChoice.
const getComputerChoice = () => {
  // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
  // Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  // use if/else to assign a computer choice based on random number
  let humanChoice = '';

  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  return computerChoice;
};

const getHumanChoice = () => {
  msg = 'Rock? Paper? Scissors? Shoot!';
  humanChoice = prompt(msg);
  return humanChoice;
};

const playRound = (humanChoice, computerChoice) => {
  let caseInsensitiveHumanChoice = humanChoice.toLowerCase();
  let msg = '';

  getComputerChoice();
  console.log(computerChoice);

  getHumanChoice();
  console.log(humanChoice);

  if (
    (caseInsensitiveHumanChoice === 'rock' &&
      computerChoice === 'scissors') ||
    (caseInsensitiveHumanChoice === 'paper' &&
      computerChoice === 'rock') ||
    (caseInsensitiveHumanChoice === 'scissors' &&
      computerChoice === 'paper')
  ) {
    msg = `You win! ${humanChoice} beats ${computerChoice}!`;
    humanScore++;
  } else if (caseInsensitiveHumanChoice === computerChoice) {
    msg = "It's a tie!";
  } else {
    msg = `You lose. ${computerChoice} beats ${caseInsensitiveHumanChoice}`;
    computerScore++;
  }

  console.log(msg);
  console.log(
    `your score: ${humanScore} | computer score: ${computerScore}`
  );
};

const playGame = () => {
  let msg = '';

  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);

  if (humanScore > computerScore) {
    msg = `You win the game! your score: ${humanScore} | computer score: ${computerScore}`;
  } else if (humanScore === computerScore) {
    msg = `It's a tied game. your score: ${humanScore} | computer score: ${computerScore}`;
  } else {
    msg = `You lose the game. your score: ${humanScore} | computer score: ${computerScore}`;
  }

  console.log(msg);
};

playGame();

// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
