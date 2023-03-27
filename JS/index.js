// This is the code for the toggle function:

const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
console.log(bookmarks);

function toggleBookmark(event) {
  console.log(event.target);
  let src = this.src;
  console.log(src);

  // if (this.src.endsWith(".png")) {
  //   this.src.replace(".png", "_filled.png");
  // } else {
  //   this.src.replace("_filled.png", ".png");
  // }

  if (this.src === "http://127.0.0.1:5500/assets/bookmark.png") {
    this.src = "http://127.0.0.1:5500/assets/bookmark_filled.png";
  } else {
    this.src = "http://127.0.0.1:5500/assets/bookmark.png";
  }
}

bookmarks.forEach((bookmarks) =>
  bookmarks.addEventListener("click", toggleBookmark)
);

// This is the code in order for the show answer button works.

const buttons = document.querySelectorAll(".card__button");
const cards = document.querySelectorAll(".card");

console.log(buttons);
console.log(cards);

function showAnswer(event, cards) {
  console.log("I clicked");
  console.log(event.target);

  event.currentTarget;

  // answers.forEach((answers) => answers.classList.remove("hidden"));
}

buttons.forEach((buttons) => buttons.addEventListener("click", showAnswer));

// this is the code for the third assigment.
