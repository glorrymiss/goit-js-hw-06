const input = document.querySelector(".input");
const btnCreate = document.querySelector("button[data-create]");
const btnRemove = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

btnCreate.addEventListener("click", creatBoxes);

btnRemove.addEventListener("click", destroyBoxes);

function creatBoxes(amount) {
  if (Number(amount) > 30) {
    const newDiv = document.body.create("<div>");
    newDiv.style.width = `${amount}px`;
    newDiv.style.height = `${amount}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    box.append(newDiv);
    return;
  } else if (Number(amount) <= 30) {
    alert("Число має бути більшим за 30");
  }
}

function destroyBoxes() {
  box.currentTarget.reset();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
