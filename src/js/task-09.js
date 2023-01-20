const background = document.querySelector(".widget");

const btnChangeColor = document.querySelector(".change-color");

background.addEventListener("click", handleClickChange);

function handleClickChange(event) {
  background.style.backgroundColor = getRandomHexColor();
  btnChangeColor.textContent = background.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
