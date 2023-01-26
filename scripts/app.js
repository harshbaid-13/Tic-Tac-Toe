let editId = 0;
playerDetails = [
  {
    name: "Sugar",
    // name: "",
    symbol: "X",
  },
  {
    name: "Spice",
    // name: "",
    symbol: "O",
  },
];
//buttons
const editPlayerOne = document.getElementById("editPlayer1");
const editPlayerTwo = document.getElementById("editPlayer2");
const cancelEdit = document.getElementById("cancelConfig");
const startGameBtn = document.getElementById("start-game-btn");
const editGameBtn = document.getElementById("edit-game-btn");
const undoBtn = document.getElementById("undo-chance-btn");
const boardItems = document.querySelectorAll(".board li");
//sections
const headerSection = document.querySelector("header");
const editSection = document.querySelector("aside");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const playerName = document.getElementById("playerName");
const playerNameError = document.getElementById("playerNameError");
const gameConfig = document.getElementById("game-config");
const activeGame = document.getElementById("active-game");
const winGame = document.getElementById("game-over-win");
const tieGame = document.getElementById("game-over-tie");
const activePlayerName = document.getElementById("active-player-name");
const before_won = document.querySelector(".before_won");
const after_won = document.querySelector(".after_won");
const loserPlayerName = document.getElementById("loser-name");
const winnerPlayerName = document.getElementById("winner-name");
//handling buttons
editPlayerOne.addEventListener("click", openConfig);
editPlayerTwo.addEventListener("click", openConfig);
cancelEdit.addEventListener("click", closeConfig);
backdrop.addEventListener("click", closeConfig);
startGameBtn.addEventListener("click", startGame);
editGameBtn.addEventListener("click", gotoGameConfig);
undoBtn.addEventListener("click", undoChance);
for (let i = 0; i < 9; i++) {
  boardItems[i].addEventListener("click", getMarked);
}
//handling sections
form.addEventListener("submit", submitConfig);
playerName.addEventListener("keyup", checkText);
//extras
document.getElementById("playerNumber1").textContent = playerDetails[0].name;
document.getElementById("playerNumber2").textContent = playerDetails[1].name;
