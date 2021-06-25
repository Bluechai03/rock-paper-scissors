const playerWins = "Player wins!";
const computerWins = "Computer wins!";

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

// Write a function that takes the player's and computer's selection as parameters.
// calculate the winner and return a string that declares the winner.
function playRound(playerSelection, computerSelection) {
  console.log(`Player's hand: ${playerSelection.toUpperCase()}`);
  console.log(`Computer's hand: ${computerSelection.toUpperCase()}`);

  //   Conditional statements to check the winner

  //   If player chooses rock
  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection.toUpperCase() === "SCISSORS") {
      console.log("Rock beats scissors.");
      return playerWins;
    } else if (computerSelection.toUpperCase() === "PAPER") {
      console.log("Paper beats rock.");
      return computerWins;
    }
  }

  //   If player chooses paper
  else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection.toUpperCase() === "ROCK") {
      console.log("Paper beats rock.");
      return playerWins;
    } else if (computerSelection.toUpperCase() === "SCISSORS") {
      console.log("Scissors beat paper.");
      return computerWins;
    }
  }

  //   If player chooses scissors
  else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection.toUpperCase() === "PAPER") {
      console.log("Scissors beat paper.");
      return playerWins;
    } else if (computerSelection.toUpperCase() === "ROCK") {
      console.log("Rock beats scissors.");
      return computerWins;
    }
  }

  //   If player and computer choose the same shape
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    return "It's a tie!";
  }
}

// Write the final function called game()
// Use the previous function inside this one to play 5 rounds that keeps score and reports the final winner and loser at the end.
function game() {
  let playerPoints = 0,
    computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    let roundWinner = playRound(playerSelection, computerSelection);
    switch (roundWinner) {
      case "Player wins!":
        console.log("One point to player.");
        playerPoints++;
        break;
      case "Computer wins!":
        console.log("One point to computer.");
        computerPoints++;
        break;
      case "It's a tie!":
        console.log("It's a tie!");
        break;
      default:
        console.log("There was an error :(");
    }
  }
  console.log(`Player's points: ${playerPoints}`);
  console.log(`Computer's points: ${computerPoints}`);
  console.log(
    playerPoints > computerPoints
      ? `Player is the final winner with ${playerPoints} points!`
      : `Computer is the final winner with ${computerPoints} points!`
  );
}

game();
