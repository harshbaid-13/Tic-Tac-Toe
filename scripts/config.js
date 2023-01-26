function openConfig(event) {
  editSection.style.display = "block";
  backdrop.style.display = "block";
  playerNameError.style.display = "none";
  form.classList.remove("error");
  editId = +event.target.dataset.playerid - 1;
  playerName.value = playerDetails[editId].name;
}
function removeConfigBox() {
  editSection.style.display = "none";
  backdrop.style.display = "none";
}
function closeConfig(event) {
  event.preventDefault();
  removeConfigBox();
}
function submitConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  text = formData.get("playername");
  if (text.includes(" ")) {
    return;
  }
  playerDetails[editId].name = text;
  document.getElementById(`playerNumber${editId + 1}`).textContent =
    playerDetails[editId].name;
  removeConfigBox();
}
function checkText() {
  text = playerName.value;
  if (text.includes(" ")) {
    form.classList.add("error");
    playerNameError.style.display = "block";
  } else {
    playerNameError.style.display = "none";
    form.classList.remove("error");
  }
}
