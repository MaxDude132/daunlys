// When the user clicks on <div>, open the popup
function hidePopups() {
    var popupInv = document.getElementById("Inventory");
    var popupChars = document.getElementById("Characters");
    popupInv.classList.toggle("show", false);
    popupChars.classList.toggle("show", false);
}

function showInventory() {
  var popup = document.getElementById("myInventory");
  popup.classList.toggle("show");
}

function showCharacters() {
  var popup = document.getElementById("myInventory");
  popup.classList.toggle("show");
}
