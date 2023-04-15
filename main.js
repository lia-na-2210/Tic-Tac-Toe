const startButton = document.getElementById('start-btn');
const selection = document.getElementById('selection');
const gameArea = document.getElementById('game-area');
const players = [];

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
});

const GameBoard = () => {
  const gameBoard = [];
};
