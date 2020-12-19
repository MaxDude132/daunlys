const storyText = {
  textChapters: {
      "c1": "-...\n-Où suis-je? Qu’est-ce qui s’est passé?\n-Tu te trouves sur le Lion des Mers, en direction de la Cage à Serpents.\n\nTes souvenirs te reviennent:\nTu t’es fait assomer par un des gardes qui ont assisté au meurtre du dictateur que ton groupe et toi tentiez de renverser. Tu te diriges vers l’Île Prison. La Cage aux Serpents.\n\nEn regardant autour de toi, tu remarques que les gardes t’ont enfermé dans la cellule d’un navire. C’est ton voisin prisonnier qui a répondu à ta question précédente."
  },

  "chapterOptionsText": {
      "c1": {
          1: "- ...",
          2: "- Sais-tu où se trouvent mes companions?",
          3: "- À L’AIDE!!!"
      }
  },

  chapterOptionsNext: {
      "start": {
          1: "c1",
      },
      "c1": {
          1: "c1_1",
          2: "c1_2",
          3: "c1_3"
      }
  }
}

const storyVars = {
  currentChapter: "start"
}

button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");

// When the user clicks on <div>, open the popup
function hidePopups() {
    var popupInv = document.getElementById("inventory");
    var popupChars = document.getElementById("characters");
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

// This is used to show or hide the button.
function showButton(button) {
  var toShow = document.getElementById(button);
  toShow.className.toggle("hidden");
}

// This is used to get the text of the current chapter
function getCurrentChapterText() {
  chapter = storyVars.currentChapter;
  return storyText.textChapters.chapter;
}

// This is used to change the content in the main_p section.
function setMainText() {
  var main_p = document.getElementsByClassName("main-p");
  main_p.textContent = getCurrentChapterText();
}

function changeChapter(next) {
  var currentChapter = storyVars.currentChapter;
  console.log(currentChapter);
  var tempChapter = storyText.chapterOptionsNext[currentChapter][next]
  storyVars.currentChapter = tempChapter
  document.querySelector("#currentChapter").textContent = "Current chapter: " + storyVars.currentChapter;
  setMainText()
}

button1.addEventListener('click', changeChapter(1));
button2.addEventListener('click', changeChapter(2));
button3.addEventListener('click', changeChapter(3));


document.querySelector("#currentChapter").textContent = "test";

// These functions have nothing to do with the story, they serve a look-and-feel purpose
