// Declare global variables
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  let humanChoice = '';

  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
};

// Function to get human's choice
const getHumanChoice = () => {
  msg = 'Rock? Paper? Scissors? Shoot!';
  humanChoice = prompt(msg);
};

const playRound = (humanChoice, computerChoice) => {
  let caseInsensitiveHumanChoice = humanChoice.toLowerCase();
  let msg = '';

  getComputerChoice();
  getHumanChoice();

  if (
    (caseInsensitiveHumanChoice === 'rock' &&
      computerChoice === 'scissors') ||
    (caseInsensitiveHumanChoice === 'paper' &&
      computerChoice === 'rock') ||
    (caseInsensitiveHumanChoice === 'scissors' &&
      computerChoice === 'paper')
  ) {
    let capitalizedHumanChoice =
      caseInsensitiveHumanChoice.charAt(0).toUpperCase() +
      caseInsensitiveHumanChoice.slice(1);
    msg = `You win! ${capitalizedHumanChoice} beats ${computerChoice}!`;
    humanScore++;
  } else if (caseInsensitiveHumanChoice === computerChoice) {
    msg = "It's a tie!";
  } else {
    let capitalizedComputerChoice =
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1);
    msg = `You lose. ${capitalizedComputerChoice} beats ${caseInsensitiveHumanChoice}.`;
    computerScore++;
  }

  console.log(msg);
  console.log(
    `Your score: ${humanScore} | Computer score: ${computerScore}`
  );
};

const playGame = () => {
  let msg = '';

  console.log("Let's play the game! Round one:");
  playRound(humanChoice, computerChoice);

  console.log('Round two:');
  playRound(humanChoice, computerChoice);

  console.log('Round three:');
  playRound(humanChoice, computerChoice);

  console.log('Round four:');
  playRound(humanChoice, computerChoice);

  console.log('Round five:');
  playRound(humanChoice, computerChoice);

  if (humanScore > computerScore) {
    msg = `Congratulations! You win the game! Your score: ${humanScore} | Computer score: ${computerScore}`;
  } else if (humanScore === computerScore) {
    msg = `It's a tied game. Your score: ${humanScore} | Computer score: ${computerScore}`;
  } else {
    msg = `GAME OVER! You lose the game. Your score: ${humanScore} | Computer score: ${computerScore}`;
  }

  console.log(msg);
};

playGame();

// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
