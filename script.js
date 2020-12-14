// When the user clicks on <div>, open the popup
function hidePopups() {
    var popupInv = document.getElementById("Inventory");
    var popupChars = document.getElementById("Characters");
    popupInv.classList.toggle("show", false);
    popupChars.classList.toggle("show", false);
}

function showInventory() {
  var popup = document.getElementById("inventory");
  popup.classList.toggle("show");
  if (document.getElementById("characters").classList.contains("show")) {
    document.getElementById("characters").classList.toggle("show", false)
  }
}

function showCharacters() {
  var popup = document.getElementById("characters");
  popup.classList.toggle("show");
  if (document.getElementById("inventory").classList.contains("show")) {
    document.getElementById("inventory").classList.toggle("show", false)
  }
}
