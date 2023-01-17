const background = document.querySelector(".widget");
const codeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", handleClickChange);

function handleClickChange(event) {
  codeColor.textContent = getRandomHexColor();
  background.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
