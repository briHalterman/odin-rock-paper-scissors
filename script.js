let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

const roundMessageElement = document.getElementById("roundMessage");
const gameOverMessageElement =
  document.getElementById("gameOverMessage");

const resetButton = document.getElementById("reset");
let choiceButtons = document.querySelectorAll(".choice");

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "Rock";
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
  } else if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
};

const playRound = (humanChoice) => {
  getComputerChoice();
  let msg = "";
  let gameOverMessage = "";

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    msg = `You win! ${humanChoice} beats ${computerChoice}!`;
  } else if (humanChoice === computerChoice) {
    msg = "It's a tie!";
  } else {
    computerScore++;
    msg = `You lose. ${computerChoice} beats ${humanChoice}.`;
  }

  const roundMessage = `${msg} Your score: ${humanScore} | Computer score: ${computerScore}`;
  roundMessageElement.textContent = roundMessage;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      gameOverMessage = ` Congratulations! You win the game!`;
    } else {
      gameOverMessage = ` GAME OVER! You lose the game.`;
    }

    gameOverMessageElement.textContent = gameOverMessage;

    choiceButtons.forEach((button) => (button.disabled = true));
  }
};

choiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const humanChoice = event.target.textContent;
    playRound(humanChoice);
  });
});

resetButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  roundMessageElement.textContent = "";
  gameOverMessageElement.textContent = "";
  choiceButtons.forEach((button) => (button.disabled = false));
});
