let editedPlayer = "0";
let player1Name = "Sugar";
let player2Name = "Spice";

const backdrop = document.getElementById("backdrop");
const configSettings = document.querySelector("aside");
const activeGame = document.getElementById("active-game");
const gameConfig = document.getElementById("game-config");
const boardGame = document.querySelector(".board");

const formElement = document.getElementById("formData");
const cancelConfig = document.getElementById("cancelConfig");
const playerNameError = document.getElementById("playerNameError");
const playerName = document.getElementById("playerName");
const playerNumnber1 = document.getElementById("playerNumnber1");
const playerNumnber2 = document.getElementById("playerNumnber2");
const startGameBtn = document.getElementById("start-game-btn");
const editConfigBtn = document.getElementById("edit-game-btn");

const editPlayer1 = document.getElementById("editPlayer1");
const editPlayer2 = document.getElementById("editPlayer2");

editPlayer1.addEventListener("click", changeConfig);
editPlayer2.addEventListener("click", changeConfig);

cancelConfig.addEventListener("click", closeConfig);
backdrop.addEventListener("click", closeConfig);
playerName.addEventListener("keyup", checkInput);
formElement.addEventListener("submit", submitConfigData);
startGameBtn.addEventListener("click", startGame);
editConfigBtn.addEventListener("click", editConfig);
