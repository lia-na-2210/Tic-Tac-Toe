const startButton = document.getElementById('start-btn');
const selection = document.getElementById('selection');
const gameArea = document.getElementById('game-area');
const gameBoard = [];
let playerX;
let playerO;
let play = 0;

startButton.addEventListener('click', () => {
  const name1 = document.getElementById('name-1').value;
  const name2 = document.getElementById('name-2').value;

  if (name1.length === 0 || name2.length === 0) {
    alert('You need to pick a name');
    return;
  }

  playerX = name1;
  playerO = name2;
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

  if (play > 4) {
    score();
  }

  if (play > 8) {
    console.log('its a tie!');
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
  // const scoreBoard = gameBoard.map(({ boxSpace, mark }) => ({ [boxSpace]: mark }));
  const box1 = document.getElementById('box1').textContent;
  const box2 = document.getElementById('box2').innerText;
  const box3 = document.getElementById('box3').innerText;
  const box4 = document.getElementById('box4').innerText;
  const box5 = document.getElementById('box5').innerText;
  const box6 = document.getElementById('box6').innerText;
  const box7 = document.getElementById('box7').innerText;
  const box8 = document.getElementById('box8').innerText;
  const box9 = document.getElementById('box9').innerText;

  if (box1 === box2 && box1 === box3 && box1 !== ' ') {
    checkWinner(box1);
  } if (box4 === box5 && box4 === box6 && box4 !== ' ') {
    checkWinner(box4);
  } if (box7 === box8 && box7 === box9 && box7 !== ' ') {
    checkWinner(box7);
  } if (box1 === box4 && box1 === box7 && box1 !== ' ') {
    checkWinner(box1);
  } if (box2 === box5 && box2 === box8 && box2 !== ' ') {
    checkWinner(box2);
  } if (box3 === box6 && box3 === box9 && box3 !== ' ') {
    checkWinner(box3);
  } if (box1 === box5 && box1 === box9 && box1 !== ' ') {
    checkWinner(box1);
  } if (box3 === box5 && box3 === box7 && box3 !== ' ') {
    checkWinner(box3);
  }
}

function checkWinner(marker) {
  if (marker === 'X') {
    console.log(`${playerX} is the winner!`);
  } if (marker === 'O') {
    console.log(`${playerO} is the winner!`);
  }
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
      showChoice(boxId, lastKey);
      GameBoard(move);
    } else {
      lastKey = 'O';
      move = moves(boxId, lastKey);
      showChoice(boxId, lastKey);
      GameBoard(move);
    }
  }));
}
