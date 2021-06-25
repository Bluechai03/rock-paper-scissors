// Write a function that randomly returns rock, paper, scissors as the computer's selection.
function computerPlay() {
  // Return rock, paper or scissors
  let shapes = ["Rock", "Paper", "Scissors"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

// Write a function that takes the player's and computer's selection as parameters.
// calculate the winner and return a string that declares the winner.
function playRound(playerSelection, computerSelection) {
  // Winner is player
  console.log(`Player's hand: ${playerSelection.toUpperCase()}`);
  console.log(`Computer's hand: ${computerSelection.toUpperCase()}`);

  if (
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "SCISSORS") ||
    (playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "ROCK") ||
    (playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "PAPER")
  ) {
    return "Player wins!";
  } else if (
    (computerSelection.toUpperCase() === "ROCK" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection.toUpperCase() === "PAPER" &&
      playerSelection.toUpperCase() === "ROCK") ||
    (computerSelection.toUpperCase() === "SCISSORS" &&
      playerSelection.toUpperCase() === "PAPER")
  ) {
    return "Computer wins!";
  } else if (
    playerSelection.toUpperCase() === computerSelection.toUpperCase()
  ) {
    return "It's a tie!";
  }
}

// Write the final function called game()
// Use the previous function inside this one to play 5 rounds that keeps score and reports the final winner and loser at the end.
function game() {
  let playerPoints = 0,
    computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter rock, paper or scissors: ");
    const computerSelection = computerPlay();
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
        consolelog("There has been an error :(");
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

// const playerSelection = prompt("Enter Rock, Paper or Scissors: ");

game();
