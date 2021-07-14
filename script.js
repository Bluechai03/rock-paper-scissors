// Scores
let playerScore = 0;
let computerScore = 0;
const divPlayerScore = document.querySelector("#player--score");
const divComputerScore = document.querySelector("#computer--score");

const divRoundWinner = document.querySelector("#round-winner");

// Write a function to enter player's selection
function playerPlay() {
  let playerSelection = prompt("Enter a shape: ");
  if (playerSelection === "ROCK" || "PAPER" || "SCISSORS") {
    return playerSelection;
  } else {
    return null;
  }
}

// Write a function that randomly returns rock, paper, scissors as the computer's selection.
function computerPlay() {
  // Return rock, paper or scissors
  let shapes = ["Rock", "Paper", "Scissors"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

const divPlayerSelection = document.querySelector("#player--selection");
const divComputerSelection = document.querySelector("#computer--selection");
const result = document.querySelector("#result");

// Write a function that takes the player's and computer's selection as parameters.
// calculate the winner and return a string that declares the winner.
function playRound(playerSelection, computerSelection) {
  divPlayerSelection.textContent = `Player's hand: ${playerSelection.toUpperCase()}`;
  divComputerSelection.textContent = `Computer's hand: ${computerSelection.toUpperCase()}`;

  //   Conditional statements to check the winner
  //   If player chooses rock
  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection.toUpperCase() === "SCISSORS") {
      result.textContent = "Rock beats scissors.";
      setRoundWinner("Player");
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === "PAPER") {
      result.textContent = "Paper beats rock.";
      setRoundWinner("Computer");
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player chooses paper
  else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection.toUpperCase() === "ROCK") {
      result.textContent = "Paper beats rock.";
      setRoundWinner("Player");
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === "SCISSORS") {
      result.textContent = "Scissors beat paper.";
      setRoundWinner("Computer");
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player chooses scissors
  else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection.toUpperCase() === "PAPER") {
      result.textContent = "Scissors beat paper.";
      setRoundWinner("Player");
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === "ROCK") {
      result.textContent = "Rock beats scissors.";
      setRoundWinner("Computer");
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player and computer choose the same shape
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    divRoundWinner.textContent = "It's a tie!";
  }

  // End round once any score reaches 5
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore >= 5 ? alert("Player wins!") : alert("Computer wins!");
    resetGame();
  }
}

function setRoundWinner(roundWinner) {
  divRoundWinner.textContent = `${roundWinner} wins a point!`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  divPlayerScore.textContent = "Player's Score: 0";
  divComputerScore.textContent = "Computer's Score: 0";
  divPlayerSelection.textContent = "";
  divComputerSelection.textContent = "";
  result.textContent = "";
  divRoundWinner.textContent = "";
}

// Write the final function called game()
// Use the previous function inside this one to play 5 rounds that keeps score and reports the final winner and loser at the end.
function game() {
  let playerPoints = 0,
    computerPoints = 0;

  console.log(`Player's points: ${playerPoints}`);
  console.log(`Computer's points: ${computerPoints}`);
  console.log(
    playerPoints > computerPoints
      ? `Player is the final winner with ${playerPoints} points!`
      : `Computer is the final winner with ${computerPoints} points!`
  );
}

// game();

const btnRock = document.querySelector("#btn--rock");
btnRock.addEventListener("click", () => playRound("ROCK", computerPlay()));

const btnPaper = document.querySelector("#btn--paper");
btnPaper.addEventListener("click", () => playRound("PAPER", computerPlay()));

const btnScissors = document.querySelector("#btn--scissors");
btnScissors.addEventListener("click", () =>
  playRound("SCISSORS", computerPlay())
);
