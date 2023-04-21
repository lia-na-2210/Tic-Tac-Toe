const startButton = document.getElementById('start-btn');
const selection = document.getElementById('selection');
const gameArea = document.getElementById('game-area');
const message = document.getElementById('message');
const gameBoard = [];
let playerX;
let playerO;
let play = 0;
let game = false;

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

function checkWinner(marker) {
  if (marker === 'X') {
    message.innerText = (`${playerX} is the winner!`);
    message.style.display = 'flex';
  } if (marker === 'O') {
    message.innerText = (`${playerO} is the winner!`);
    message.style.display = 'flex';
  }
  game = true;
}

function score() {
  const box1 = document.getElementById('box1').innerText;
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

function GameBoard(choice, box, mark) {
  if (game === true) {
    return;
  }
  if (gameBoard.some((e) => e.boxSpace === choice.boxSpace)) {
    return;
  }
  gameBoard.push(choice);
  play += 1;
  showChoice(box, mark);

  if (play > 4) {
    score();
  }

  if (play > 8) {
    message.innerText = ('Uh Oh! It\'s a tie!');
    message.style.display = 'flex';
    game = true;
  }
}

function playGame() {
  let lastKey = ' ';
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => box.addEventListener('click', (e) => {
    const boxId = e.target.id;
    let move;
    if (lastKey === 'O' || lastKey === ' ') {
      lastKey = 'X';
      move = moves(boxId, lastKey);
      GameBoard(move, boxId, lastKey);
    } else {
      lastKey = 'O';
      move = moves(boxId, lastKey);
      GameBoard(move, boxId, lastKey);
    }
  }));
}

startButton.addEventListener('click', () => {
  const name1 = document.getElementById('name-1').value;
  const name2 = document.getElementById('name-2').value;
  const area = document.getElementById('area');

  if (name1.length === 0 || name2.length === 0) {
    alert('You need to pick a name');
    return;
  }

  playerX = name1;
  playerO = name2;
  selection.style.display = 'none';
  gameArea.style.display = 'flex';
  area.style.display = 'none';
  playGame();
});

document.getElementById('restart-btn').addEventListener('click', () => {
  gameBoard.length = 0;
  playerX = '';
  playerO = '';
  play = 0;
  const boxes = document.getElementsByClassName('box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = '';
  }
  message.style.display = 'none';
  message.innerText = '';
  game = false;
  selection.style.display = 'inline';
  gameArea.style.display = 'none';
  const area = document.getElementById('area');
  area.style.display = 'flex';
});

document.getElementById('again-btn').addEventListener('click', () => {
  gameBoard.length = 0;
  play = 0;
  const boxes = document.getElementsByClassName('box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = '';
  }
  message.style.display = 'none';
  message.innerText = '';
  game = false;
});
