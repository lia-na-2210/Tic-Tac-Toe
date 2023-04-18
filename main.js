const startButton = document.getElementById('start-btn');
const selection = document.getElementById('selection');
const gameArea = document.getElementById('game-area');
const players = [];
const gameBoard = [];
let play = 0;

startButton.addEventListener('click', () => {
  const name1 = document.getElementById('name-1').value;
  const name2 = document.getElementById('name-2').value;

  if (name1.length === 0 || name2.length === 0) {
    alert('You need to pick a name');
    return;
  }

  players.push({ playerX: name1, mark: 'X' }, { playerO: name2, mark: 'O' });
  selection.style.display = 'none';
  gameArea.style.display = 'flex';
  playGame();
});

function GameBoard(choice) {
  if (gameBoard.some((e) => e.boxSpace === choice.boxSpace)) {
    return;
  }
  gameBoard.push(choice);
  play += 1;

  if (play >= 5) {
    score();
  }
}

function moves(box, marker) {
  return {
    boxSpace: box,
    mark: marker,
  };
}

function showChoice(tic, tac) {
  const box = document.getElementById(tic);
  box.innerText = tac;
}

function score() {
  const scoreBoard = gameBoard.map(({ boxSpace, mark }) => ({ [boxSpace]: mark }));
}

function playGame() {
  let lastKey = ' ';
  const box = document.querySelectorAll('.box');
  box.forEach((box) => box.addEventListener('click', (e) => {
    const boxId = e.target.id;
    let move;
    if (lastKey === 'O' || lastKey === ' ') {
      lastKey = 'X';
      move = moves(boxId, lastKey);
      GameBoard(move);
      showChoice(boxId, lastKey);
    } else {
      lastKey = 'O';
      move = moves(boxId, lastKey);
      GameBoard(move);
      showChoice(boxId, lastKey);
    }
  }));
}
