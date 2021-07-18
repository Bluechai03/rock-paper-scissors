function setPlayerItemBtns(btn, item) {
  btn.addEventListener('click', () => {
    playerSelection = item;
    playerHiddenFrame.style.display = 'none';
    // Enable all item buttons
    playerItems.forEach((playerItem) => (playerItem.disabled = false));
    playerItems.disabled = false;
    playerItems.textContent = 'boop';

    // Disable selected button and add it's image to frame
    btnPlayRound.disabled = false;
    playerSelectionImg.src = `../images/${item}.png`;

    const playerFrame = document.querySelector('#player-frame');
    playerFrame.appendChild(playerSelectionImg);
  });
}

// Write a function that randomly returns rock, Wool, shears as the computer's selection.
function computerPlay() {
  // Return rock, Wool or shears
  const items = ['rock', 'wool', 'shears'];
  let item = items[Math.floor(Math.random() * items.length)];
  computerSelectionImg.src = `../images/${item}.png`;
  console.log(`../images/${item}.png`);

  computerFrame.appendChild(computerSelectionImg);

  return item;
}
function setRoundWinner(roundWinner) {
  currentRoundWinner.textContent = `${roundWinner} wins this round!`;
}
// Write a function that takes the player's and computer's selection as parameters.
// calculate the winner and return a string that declares the winner.
function playRound(playerSelection, computerSelection) {
  computerFrame.removeChild(questionMark);
  btnPlayRound.disabled = true;
  btnItems.forEach((item) => (item.style.visibility = 'hidden'));

  //   Conditional statements to check the winner
  //   If player chooses rock

  if (playerSelection.toUpperCase() === 'ROCK') {
    if (computerSelection.toUpperCase() === 'SHEARS') {
      result.textContent = 'Rock beats shears';
      setRoundWinner('Player');
      playerScore++;
    } else if (computerSelection.toUpperCase() === 'WOOL') {
      result.textContent = 'Wool beats rock';
      setRoundWinner('Computer');
      computerScore++;
    }
  }

  //   If player chooses Wool
  else if (playerSelection.toUpperCase() === 'WOOL') {
    if (computerSelection.toUpperCase() === 'ROCK') {
      result.textContent = 'Wool beats rock';
      setRoundWinner('Player');
      playerScore++;
    } else if (computerSelection.toUpperCase() === 'SHEARS') {
      result.textContent = 'Shears beat wool';
      setRoundWinner('Computer');
      computerScore++;
    }
  }

  //   If player chooses shears
  else if (playerSelection.toUpperCase() === 'SHEARS') {
    if (computerSelection.toUpperCase() === 'WOOL') {
      result.textContent = 'Shears beat wool';
      setRoundWinner('Player');
      playerScore++;
    } else if (computerSelection.toUpperCase() === 'ROCK') {
      result.textContent = 'Rock beats shears';
      setRoundWinner('Computer');
      computerScore++;
    }
  }

  //   If player and computer choose the same shape
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    result.textContent = '';
    currentRoundWinner.textContent = "It's a tie!";
  }

  updateScore();

  // End round once any score reaches 5
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore >= 5
      ? alert('Player wins this game!')
      : alert('Computer wins this game!');
    resetGame();
  }
}
let round = 1;

function playNextRound() {
  round++;
  playerHiddenFrame.style.display = 'block';
  btnItems.forEach((item) => (item.style.visibility = 'visible'));
  computerFrame.appendChild(questionMark);
  roundTitle.textContent = `Round ${round}`;
  result.textContent = '';
  currentRoundWinner.textContent = '';
  playerSelectionImg.src = '';
  computerSelectionImg.src = '';
  btnPlayRound.disabled = true;
  btnNextRound.disabled = true;
}

function resetGame() {
  resetScore(playerScoreImg);
  resetScore(computerScoreImg);
  playerHiddenFrame.style.display = 'block';
  btnItems.forEach((item) => (item.style.visibility = 'visible'));
  result.textContent = '';
  contRoundWinner.textContent = '';
  btnPlayRound.disabled = true;
  playerSelectionImg.src = '';
  computerSelectionImg.src = '';
  computerFrame.appendChild(questionMark);
}

function resetScore(scoreImg) {
  playerScore = 0;
  computerScore = 0;
  scoreImg.forEach((score) => (score.src = '../images/heart.png'));
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

const roundTitle = document.querySelector('#round-title');
// Scores
let playerScore = 0;
let computerScore = 0;

const playerScoreImg = document.querySelectorAll('.score--player');
const computerScoreImg = document.querySelectorAll('.score--computer');

const contRoundWinner = document.querySelector('#round-winner--container');

let playerSelection;
const result = document.querySelector('#result');

const btnRock = document.querySelector('#btn--rock');
const btnWool = document.querySelector('#btn--wool');
const btnShears = document.querySelector('#btn--shears');

const currentRoundWinner = document.querySelector('#round-winner');

const computerFrame = document.querySelector('#computer-frame');

const btnPlayRound = document.querySelector('#btn--play-round');
btnPlayRound.disabled = true;
btnPlayRound.addEventListener('click', () => {
  try {
    playRound(playerSelection, computerPlay());
    btnPlayRound.disabled = true;
    btnNextRound.disabled = false;
  } catch (error) {
    alert(error.message);
  }
});

const btnNextRound = document.querySelector('#btn--next-round');
btnNextRound.disabled = true;
btnNextRound.addEventListener('click', () => playNextRound());

const btnItems = [btnRock, btnWool, btnShears];
const items = ['rock', 'wool', 'shears'];
const playerSelectionImg = document.createElement('img');
const computerSelectionImg = document.createElement('img');

// Add event listeners to item buttons
for (let i = 0; i < items.length; i++) {
  setPlayerItemBtns(btnItems[i], items[i]);
}

const playerItems = document.querySelectorAll('.items__btn--player');

const questionMark = document.querySelector('#question-mark');
const playerHiddenFrame = document.querySelector('#hidden-frame--player');
