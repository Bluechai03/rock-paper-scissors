let playerHearts = 5,
  compHearts = 5;

//TODO reset frames when next round button is clicked
function game() {
  let roundCount = 1;
  getPlayerItem();

  const btnPlayRound = document.querySelector('#btn--play-round');
  btnPlayRound.disabled = true;
  btnPlayRound.addEventListener('click', () =>
    playRound(playerItem, getCompItem())
  );

  const btnNextRound = document.querySelector('#btn--next-round');
  btnNextRound.disabled = true;
  btnNextRound.addEventListener('click', () => {
    playNextRound(++roundCount);
  });

  const playerHeartsImg = document.querySelectorAll('.score--player');
  playerHeartsImg.forEach((heart) => (heart.src = '../images/heart.png'));
}

function playRound(playerItem, compItem) {
  const btnPlayRound = document.querySelector('#btn--play-round');
  btnPlayRound.disabled = true;

  const btnNextRound = document.querySelector('#btn--next-round');
  btnNextRound.disabled = false;
  console.log(playerItem);
  console.log(compItem);
  showCompItem(compItem);

  calcWinner(playerItem, compItem);

  const playerHeartsImg = document.querySelectorAll('.score--player');
  const compHeartsImg = document.querySelectorAll('.score--computer');

  updateHearts(playerHeartsImg, playerHearts);
  updateHearts(compHeartsImg, compHearts);

  if (playerHearts <= 0 || compHearts <= 0) {
    playerHearts <= 0
      ? alert('Computer wins this game!')
      : alert('Player wins this game!');
    roundCount = 1;
    const roundTitle = document.querySelector('#title--round');
    roundTitle.textContent = `Round ${roundCount}`;
    resetAllHearts();
    resetUI();
  }
}

function playNextRound(roundCount) {
  const roundTitle = document.querySelector('#title--round');
  roundTitle.textContent = `Round ${roundCount}`;
  resetUI();
}

function getPlayerItem() {
  const btnRock = document.querySelector('#btn--rock');
  const btnWool = document.querySelector('#btn--wool');
  const btnShears = document.querySelector('#btn--shears');
  const btnItems = [btnRock, btnWool, btnShears];
  const items = ['rock', 'wool', 'shears'];
  const framePlayer = document.querySelector('#player-frame');

  // Add event listeners to item buttons
  for (let i = 0; i < items.length; i++) {
    btnItems[i].addEventListener('click', () => {
      playerItem = items[i];
      showItem(framePlayer, items[i]);

      const btnPlayRound = document.querySelector('#btn--play-round');
      btnPlayRound.disabled = false;
    });
  }
}
function showPlayerItem(frame, item) {
  const imgPlayerItem = document.createElement('img');
  frame.style.display = 'none';
  imgPlayerItem.src = `../images/${item}.png`;
  const playerFrame = document.querySelector('#player-frame');
  playerFrame.textContent = ''; // removes any child node
  playerFrame.appendChild(imgPlayerItem);
}

function getCompItem() {
  // Return rock, Wool or shears
  const items = ['rock', 'wool', 'shears'];
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function showCompItem(item) {
  const frameComp = document.querySelector('#computer-frame');
  const placeholderComp = document.querySelector('#placeholder-computer');
  showItem(frameComp, item);
}

function showItem(frame, item) {
  const imgItem = document.createElement('img');
  imgItem.src = `/images/${item}.png`;
  frame.textContent = '';
  frame.appendChild(imgItem);
}

function calcWinner(playerItem, compItem) {
  const result = document.querySelector('#result');

  // If player chooses rock
  if (playerItem.toUpperCase() === 'ROCK') {
    if (compItem.toUpperCase() === 'SHEARS') {
      result.textContent = 'Rock beats shears';
      setRoundWinner('Player');
    } else if (compItem.toUpperCase() === 'WOOL') {
      result.textContent = 'Wool beats rock';
      setRoundWinner('Computer');
    }
  }
  // If player chooses wool
  if (playerItem.toUpperCase() === 'WOOL') {
    if (compItem.toUpperCase() === 'ROCK') {
      result.textContent = 'Wool beats rock';
      setRoundWinner('Player');
    } else if (compItem.toUpperCase() === 'SHEARS') {
      result.textContent = 'Shears beat wool';
      setRoundWinner('Computer');
    }
  }

  // If player chooses shears
  if (playerItem.toUpperCase() === 'SHEARS') {
    if (compItem.toUpperCase() === 'WOOL') {
      result.textContent = 'Shears beat wool';
      setRoundWinner('Player');
    } else if (compItem.toUpperCase() === 'ROCK') {
      result.textContent = 'Rock beats shears';
      setRoundWinner('Computer');
    }
  }

  // If player and comp choose same item
  if (playerItem.toUpperCase() === compItem.toUpperCase()) {
    result.textContent = '';
    setRoundWinner();
  }
}

function setRoundWinner(roundWinner = 'Tie') {
  const currentRoundWinner = document.querySelector('#round-winner');
  let color = '#FFF';
  if (roundWinner === 'Tie') {
    currentRoundWinner.textContent = `It's a tie!`;
  } else {
    currentRoundWinner.textContent = `${roundWinner} wins this round!`;
    if (roundWinner === 'Player') {
      color = '#38CD8D';
      compHearts--;
    } else if (roundWinner === 'Computer') {
      color = '#AC6CFF';
      playerHearts--;
    }
  }
  currentRoundWinner.style.color = color;
}

function resetHearts(heartsImg, hearts) {
  heartsImg.forEach((score) => (score.src = '../images/heart.png'));
  console.log(hearts);
}

function resetAllFrames() {
  const playerFrame = document.querySelector('#player-frame');
  const playerPlaceholder = document.createElement('img');
  playerPlaceholder.src = '../images/frame.png';

  playerFrame.textContent = '';
  playerFrame.appendChild(playerPlaceholder);

  const compFrame = document.querySelector('#computer-frame');
  const compPlaceholder = document.createElement('img');
  compPlaceholder.src = '../images/question-mark.png';

  compFrame.textContent = '';
  compFrame.appendChild(compPlaceholder);
}

function resetUI() {
  const result = document.querySelector('#result');
  const currentRoundWinner = document.querySelector('#round-winner');
  result.textContent = '';
  currentRoundWinner.textContent = '';
  disableAllBtns();
  resetAllFrames();
}

function disableAllBtns() {
  const btnPlayRound = document.querySelector('#btn--play-round');
  btnPlayRound.disabled = true;
  const btnNextRound = document.querySelector('#btn--next-round');
  btnNextRound.disabled = true;
}

function updateHearts(heartsImg, hearts) {
  console.log(hearts);
  for (let i = 4; i >= hearts; i--) {
    heartsImg.item(i).src = '../images/empty-heart.png';
  }
}

function resetAllHearts() {
  console.log('Resetting');
  playerHearts = 5;
  compHearts = 5;
  const playerHeartsImg = document.querySelectorAll('.score--player');
  const compHeartsImg = document.querySelectorAll('.score--computer');
  resetHearts(playerHeartsImg, playerHearts);
  resetHearts(compHeartsImg, compHearts);
}

game();
