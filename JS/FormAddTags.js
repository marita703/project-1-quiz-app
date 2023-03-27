// These are the constants for excersise 3
const form = document.querySelector(".add-cards");
let questionText = "";
let answerText = "";
let tagText = "";

// These are the constants  for the 4th task
const questionArea = document.querySelector('[id="yourQuestion"]');
const answerArea = document.querySelector('[id="yourAnswer"]');
const display1 = document.querySelector(".caratersleft1");
const display2 = document.querySelector(".caratersleft2");

// This is the code for excersice 3
const mainTag = document.querySelector(".main__form-add-tags");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  questionText = data["yourQuestion"];
  answerText = data.yourAnswer;
  tagText = data.yourTag;

  console.log(
    "questionText",
    questionText,
    "answerText",
    answerText,
    "tagText",
    tagText
  );

  const sectioncard = document.createElement("section");
  const questionP = document.createElement("p");
  const answerP = document.createElement("p");
  const tagDiv = document.createElement("div");
  const showButton = document.createElement("button");
  const bookmark = document.createElement("div");

  mainTag.append(sectioncard);
  sectioncard.append(questionP);
  sectioncard.append(showButton);
  sectioncard.append(bookmark);
  sectioncard.append(answerP);
  sectioncard.append(tagDiv);

  sectioncard.classList.add("card");
  questionP.classList.add("card__text");
  answerP.classList.add("question-card__answer");
  tagDiv.classList.add("card__tags-section__tag");
  showButton.classList.add("card__button");
  bookmark.classList.add("bookmark");

  questionP.textContent = questionText;
  answerP.textContent = answerText;
  tagDiv.textContent = tagText;
  showButton.textContent = "Show Answer";
  document.getElementById("caratersleft1").innerText = "150 characters left";
  document.getElementById("caratersleft2").innerText = "150 characters left";

  event.target.reset();
});

// This is the code for the 4th task

questionArea.addEventListener("input", (event) => {
  console.log(event.target);
  const text = questionArea.value;
  console.log(text);

  let lengthArray = parseInt(text.length);
  let result = 150 - lengthArray;

  console.log(lengthArray);
  console.log(result);

  display1.textContent = `${result} characters left`;
});

answerArea.addEventListener("input", (event) => {
  console.log(event.target);
  const text = answerArea.value;
  console.log(text);

  let lengthArray = parseInt(text.length);
  let result = 150 - lengthArray;

  console.log(lengthArray);
  console.log(result);

  display2.textContent = `${result} characters left`;
});
