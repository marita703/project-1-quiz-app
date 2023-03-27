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

  // be careful with the Port number... normally is 5500
}

bookmarks.forEach((bookmarks) =>
  bookmarks.addEventListener("click", toggleBookmark)
);

// This is the code in order for the show answer button works.

const buttons = document.querySelectorAll(".card__button");
const answers = document.querySelectorAll(".question-card__answer");

console.log(buttons);
console.log(answers);

function showAnswer(event) {
  console.log("I clicked");
  console.log(event.target);

  // answers.forEach((answers) => answers.classList.remove("hidden"));
}

buttons.forEach((buttons, index) =>
  buttons.addEventListener("click", (event) => {
    console.log(event.target, index);
    answers[index].classList.toggle("hidden");
  })
);

// this is the code for the third assigment.
