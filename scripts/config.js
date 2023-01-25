function changeConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  backdrop.style.display = "block";
  configSettings.style.display = "block";
  if (editedPlayer === 1) playerName.value = player1Name;
  else playerName.value = player2Name;
}

function closeConfig() {
  backdrop.style.display = "none";
  configSettings.style.display = "none";
}
function submitConfigData(event) {
  event.preventDefault();
  formData = new FormData(event.target);
  playername = formData.get("playername").trim();
  if (!playername) {
    playerNameError.style.display = "block";
    formElement.classList.add("error");
    return;
  } else {
    formElement.classList.remove("error");
  }
  const playerData = document.getElementById("playerNumnber" + editedPlayer);
  playerData.textContent = playername;
  if (editedPlayer === 1) player1Name = playername;
  else player2Name = playername;
  closeConfig();
}
function checkInput() {
  text = playerName.value.trim();
  if (text === "") {
    formElement.classList.add("error");
  } else {
    playerNameError.style.display = "none";
    formElement.classList.remove("error");
  }
}
