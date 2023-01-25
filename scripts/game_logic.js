let chance = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let won = false;
function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  won = false;
  chance = "X";
  document.getElementById("box0").textContent = "";
  document.getElementById("box1").textContent = "";
  document.getElementById("box2").textContent = "";
  document.getElementById("box3").textContent = "";
  document.getElementById("box4").textContent = "";
  document.getElementById("box5").textContent = "";
  document.getElementById("box6").textContent = "";
  document.getElementById("box7").textContent = "";
  document.getElementById("box8").textContent = "";
  document.getElementById("box0").classList.remove("disabled");
  document.getElementById("box1").classList.remove("disabled");
  document.getElementById("box2").classList.remove("disabled");
  document.getElementById("box3").classList.remove("disabled");
  document.getElementById("box4").classList.remove("disabled");
  document.getElementById("box5").classList.remove("disabled");
  document.getElementById("box6").classList.remove("disabled");
  document.getElementById("box7").classList.remove("disabled");
  document.getElementById("box8").classList.remove("disabled");
  document.querySelector(".after_won").style.display = "none";
  document.querySelector(".before_won").style.display = "block";
  document.getElementById("game-over-win").style.display = "none";
  document.getElementById("game-over-tie").style.display = "none";
}
function isFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") return false;
    }
  }
  return true;
}
function checkWinner() {
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  )
    return true;
  if (
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  )
    return true;
  if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  )
    return true;
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  )
    return true;
  if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  )
    return true;
  if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  )
    return true;
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  )
    return true;
  if (
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") ||
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  )
    return true;
  return false;
}
function markIt(event) {
  if (event.target.textContent != "" || won) {
    return;
  }
  const rowNum = Math.floor(event.target.id[3] / 3);
  const colNum = event.target.id[3] % 3;
  board[rowNum][colNum] = chance;
  //   console.log(board);
  event.target.classList.add("disabled");
  event.target.textContent = board[rowNum][colNum];
  if (checkWinner()) {
    won = true;
    if (chance == "X") {
      winner = player1Name;
      loser = player2Name;
    } else {
      winner = player2Name;
      loser = player1Name;
    }
    document.getElementById("winner-name").textContent = winner;
    document.getElementById("game-over-win").style.display = "block";
    console.log(chance + " is the winner");
  }
  chance = chance == "X" ? "O" : "X";
  if (!won && chance == "X")
    document.getElementById("active-player-name").textContent = player1Name;
  else document.getElementById("active-player-name").textContent = player2Name;
  if (won) {
    document.getElementById("start-game-btn").style.display = "block";
    document.getElementById("loser-name").textContent = loser;
    document.querySelector(".after_won").style.display = "block";
    document.querySelector(".before_won").style.display = "none";
  }
  if (isFull() && !won) {
    document.getElementById("game-over-tie").style.display = "block";
    document.getElementById("start-game-btn").style.display = "block";
    document.querySelector(".before_won").style.display = "none";
  }
}
function editConfig() {
  gameConfig.style.display = "block";
  editConfigBtn.style.display = "none";
  activeGame.style.display = "none";
  document.getElementById("start-game-btn").style.display = "block";
}
function startGame() {
  resetBoard();
  if (player1Name == "" && player2Name == "") {
    alert("Please enter valid player name");
    return;
  }
  document.getElementById("active-player-name").textContent = player1Name;
  document.getElementById("start-game-btn").style.display = "none";
  activeGame.style.display = "block";
  gameConfig.style.display = "none";
  editConfigBtn.style.display = "block";
  document.getElementById("box0").addEventListener("click", markIt);
  document.getElementById("box1").addEventListener("click", markIt);
  document.getElementById("box2").addEventListener("click", markIt);
  document.getElementById("box3").addEventListener("click", markIt);
  document.getElementById("box4").addEventListener("click", markIt);
  document.getElementById("box5").addEventListener("click", markIt);
  document.getElementById("box6").addEventListener("click", markIt);
  document.getElementById("box7").addEventListener("click", markIt);
  document.getElementById("box8").addEventListener("click", markIt);
}
