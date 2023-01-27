let chance = 1;
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let moves = [];
let won = false;
function checkResult() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== 0 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    )
      return board[i][0];
  }
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] !== 0 &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    )
      return board[0][i];
  }
  if (
    (board[1][1] !== 0 &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]) ||
    (board[2][0] === board[1][1] && board[1][1] === board[0][2])
  )
    return board[1][1];
  if (moves.length == 9) return -1;
  return 0;
}
function undoChance() {
  if (moves.length == 0) return;
  const lastElement = moves[moves.length - 1];
  const boardElement = lastElement.element;
  moves.pop();
  board[lastElement.r][lastElement.c] = 0;
  boardElement.classList.remove("disabled");
  chance = chance == 1 ? 2 : 1;
  activePlayerName.textContent = playerDetails[chance - 1].name;
  boardElement.textContent = "";
}
function getMarked(event) {
  const boardElement = event.target;
  rowNum = boardElement.dataset.r;
  colNum = boardElement.dataset.c;
  if (board[rowNum][colNum] !== 0 || won) return;
  board[rowNum][colNum] = chance;
  moves.push({ r: rowNum, c: colNum, element: boardElement });
  chance = chance == 1 ? 2 : 1;
  activePlayerName.textContent = playerDetails[chance - 1].name;
  boardElement.classList.add("disabled");
  boardElement.textContent = playerDetails[board[rowNum][colNum] - 1].symbol;
  results = checkResult();
  if (results == 0) return;
  activeGame.style.height = "auto";
  before_won.style.display = "none";
  undoBtn.style.display = "none";
  startGameBtn.style.display = "block";
  startGameBtn.style.marginBottom = "-1rem";
  startGameBtn.style.marginTop = "1rem";
  if (results == -1) {
    tieGame.style.display = "block";
    return;
  }
  won = true;
  winnerPlayerName.textContent = playerDetails[chance % 2].name;
  loserPlayerName.textContent = playerDetails[chance - 1].name;
  winGame.style.display = "block";
  after_won.style.display = "block";
}
function gotoGameConfig() {
  headerSection.style.display = "block";
  gameConfig.style.display = "block";
  startGameBtn.style.display = "block";
  editGameBtn.style.display = "none";
  undoBtn.style.display = "none";
  activeGame.style.display = "none";
}
function startGame() {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  moves = [];
  for (let i = 0; i < 9; i++) {
    boardItems[i].textContent = "";
    boardItems[i].classList.remove("disabled");
  }
  won = false;
  chance = 1;
  headerSection.style.display = "none";
  gameConfig.style.display = "none";
  startGameBtn.style.display = "none";
  editGameBtn.style.display = "block";
  undoBtn.style.display = "block";
  activeGame.style.display = "flex";
  tieGame.style.display = "none";
  winGame.style.display = "none";
  after_won.style.display = "none";
  activePlayerName.textContent = playerDetails[0].name;
  startGameBtn.style.marginBottom = "";
  startGameBtn.style.marginTop = "";
  activeGame.style.height = "100vh";
  before_won.style.display = "block";
}
