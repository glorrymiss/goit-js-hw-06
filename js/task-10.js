const input = document.querySelector(".input");

const btnCreate = document.querySelector("button[data-create]");
const btnRemove = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let amount;
input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
  console.log(amount);
});

btnCreate.addEventListener("click", creatBoxes);

btnRemove.addEventListener("click", destroyBoxes);

function creatBoxes(event) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = 30 + 10 * i + "px";
    newDiv.style.height = 30 + 10 * i + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    box.append(newDiv);
  }
}
function destroyBoxes() {
  box.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
