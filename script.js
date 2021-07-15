function setItemButtons(btn, item) {
  btn.addEventListener('click', () => {
    playerSelection = item;

    // Enable all item buttons
    playerItems.forEach((playerItem) => (playerItem.disabled = false));
    playerItems.disabled = false;
    playerItems.textContent = 'boop';

    // Disable selected button and add it's image to frame
    btnPlayRound.disabled = false;
    playerSelectionImg.src = `../images/${item}.png`;

    btn.disabled = true;

    const playerFrame = document.querySelector('#player--frame');
    playerFrame.appendChild(playerSelectionImg);
  });
}

// Write a function that randomly returns rock, Wool, shears as the computer's selection.
function computerPlay() {
  // Return rock, Wool or shears
  let shapes = ['ROCK', 'WOOL', 'SHEARS'];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function setRoundWinner(roundWinner) {
  divRoundWinner.textContent = `${roundWinner} wins a point!`;
}
// Write a function that takes the player's and computer's selection as parameters.
// calculate the winner and return a string that declares the winner.
function playRound(playerSelection, computerSelection) {
  playerSelectionImg.src = '';
  btnPlayRound.disabled = true;
  divPlayerSelection.textContent = `Player's hand: ${playerSelection.toUpperCase()}`;
  divComputerSelection.textContent = `Computer's hand: ${computerSelection.toUpperCase()}`;

  //   Conditional statements to check the winner
  //   If player chooses rock
  if (playerSelection.toUpperCase() === 'ROCK') {
    if (computerSelection.toUpperCase() === 'SHEARS') {
      result.textContent = 'Rock beats shears.';
      setRoundWinner('Player');
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === 'WOOL') {
      result.textContent = 'Wool beats rock.';
      setRoundWinner('Computer');
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player chooses Wool
  else if (playerSelection.toUpperCase() === 'WOOL') {
    if (computerSelection.toUpperCase() === 'ROCK') {
      result.textContent = 'Wool beats rock.';
      setRoundWinner('Player');
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === 'SHEARS') {
      result.textContent = 'Shears beat wool.';
      setRoundWinner('Computer');
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player chooses shears
  else if (playerSelection.toUpperCase() === 'SHEARS') {
    if (computerSelection.toUpperCase() === 'WOOL') {
      result.textContent = 'Shears beat wool.';
      setRoundWinner('Player');
      divPlayerScore.textContent = `Player's Score: ${++playerScore}`;
    } else if (computerSelection.toUpperCase() === 'ROCK') {
      result.textContent = 'Rock beats shears.';
      setRoundWinner('Computer');
      divComputerScore.textContent = `Computer's Score: ${++computerScore}`;
    }
  }

  //   If player and computer choose the same shape
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    result.textContent = '';
    divRoundWinner.textContent = "It's a tie!";
  }

  updateScore();

  // End round once any score reaches 5
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore >= 5 ? alert('Player wins!') : alert('Computer wins!');
    resetGame();
  }
}

function resetGame() {
  resetScore();
  divPlayerScore.textContent = "Player's Score: 0";
  divComputerScore.textContent = "Computer's Score: 0";
  divPlayerSelection.textContent = '';
  divComputerSelection.textContent = '';
  result.textContent = '';
  divRoundWinner.textContent = '';
  btnPlayRound.disabled = true;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  playerScoreImg.forEach((score) => (score.src = '../images/heart.png'));
}

function updateScore() {
  console.log('update score');
  // Update score for computer
  for (let i = 0; i < playerScore; i++) {
    console.log(i);
    computerScoreImg[i].src = '../images/empty-heart.png';
  }

  // Update score for player
  for (let i = 0; i < computerScore; i++) {
    playerScoreImg[i].src = '../images/empty-heart.png';
  }
}

// Scores
let playerScore = 0;
let computerScore = 0;

const playerScoreImg = document.querySelectorAll('.score--player');
const computerScoreImg = document.querySelectorAll('.score--computer');

const divPlayerScore = document.querySelector('#player--score');
const divComputerScore = document.querySelector('#computer--score');
const divRoundWinner = document.querySelector('#round-winner');

let playerSelection;
const divPlayerSelection = document.querySelector('#player--selection');
const divComputerSelection = document.querySelector('#computer--selection');
const result = document.querySelector('#result');

const btnRock = document.querySelector('#btn--rock');
const btnWool = document.querySelector('#btn--wool');
const btnShears = document.querySelector('#btn--shears');

const btnPlayRound = document.querySelector('#btn--play-round');
btnPlayRound.disabled = true;
btnPlayRound.addEventListener('click', () => {
  try {
    playRound(playerSelection, computerPlay());
    btnPlayRound.disabled = true;
  } catch (error) {
    alert(error.message);
  }
});

const btnItems = [btnRock, btnWool, btnShears];
const items = ['rock', 'wool', 'shears'];
const playerSelectionImg = document.createElement('img');

// Add event listeners to item buttons
for (let i = 0; i < items.length; i++) {
  setItemButtons(btnItems[i], items[i]);
}

const playerItems = document.querySelectorAll('.items__btn--player');
