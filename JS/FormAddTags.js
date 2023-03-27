const form = document.querySelector(".add-cards");
let questionText = "";
let answerText = "";
let tagText = "";

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

  document.body.append(sectioncard);
  sectioncard.append(questionP);
  sectioncard.append(showButton);
  sectioncard.append(answerP);
  sectioncard.append(tagDiv);

  sectioncard.classList.add("card");
  questionP.textContent = questionText;
  answerP.textContent = answerText;
  tagDiv.textContent = tagText;
  event.target.reset();
});
