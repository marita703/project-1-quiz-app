const form = document.querySelector(".add-cards");
let questionText = "";
let answerText = "";
let tagText = "";
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
  event.target.reset();
});
