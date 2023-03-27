// This is the code for the toggle function:

const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
console.log(bookmarks);

function toggleBookmark(event) {
  console.log(event.target);
  console.log(this.getAttribute("src"));
  this.src = "./assets/bookmark_filled.png";
}

bookmarks.forEach((bookmarks) =>
  bookmarks.addEventListener("click", toggleBookmark)
);

// This is the code in order for the show answer button works.

const buttons = document.querySelectorAll(".card__button");
const answers = document.querySelectorAll(".question-card__answer");

console.log(buttons);

function showAnswer() {
  console.log("I clicked");
  answers.forEach((answers) => answers.classList.remove("hidden"));
}

buttons.forEach((buttons) => buttons.addEventListener("click", showAnswer));
