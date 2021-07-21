game();
//TODO reset frames when next round button is clicked
function game() {
  const btnPlayRound = document.querySelector('#btn--play-round');
  const btnNextRound = document.querySelector('#btn--next-round');
  const hiddenFrames = document.querySelectorAll('.hidden-frame');
  getPlayerItem();
  btnPlayRound.addEventListener('click', () =>
    playRound(playerItem, getCompItem())
  );
  btnNextRound.addEventListener('click', () => {
    reset();
  });
}

function playRound(playerItem, compItem) {
  console.log(playerItem);
  console.log(compItem);
  showCompItem(compItem);
}

function setRound() {}

function getPlayerItem() {
  const btnRock = document.querySelector('#btn--rock');
  const btnWool = document.querySelector('#btn--wool');
  const btnShears = document.querySelector('#btn--shears');
  const btnItems = [btnRock, btnWool, btnShears];
  const items = ['rock', 'wool', 'shears'];
  const placeholderPlayer = document.querySelector('#placeholder--player');
  const framePlayer = document.querySelector('#player-frame');

  // Add event listeners to item buttons
  for (let i = 0; i < items.length; i++) {
    btnItems[i].addEventListener('click', () => {
      playerItem = items[i];
      showItem(framePlayer, items[i]);
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

function calcWinner() {}

function updateHearts() {}

function reset() {
  console.log('Resetting');
}
