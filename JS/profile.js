// Adding Darkmode functionality
const toogle = document.querySelector('[data-js="toogle"]');

toogle.addEventListener("change", () => {
  const checked = toogle.checked;

  console.log(checked);

  document.body.classList.toggle("dark-mode");
});
