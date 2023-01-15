const counter = document.getElementById("#counter");
const value = document.getElementById("value");
const btnDescrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDescrement.addEventListener("click", handleTargetBtnClickLeft);
let counterValue = 0;
function handleTargetBtnClickLeft() {
  counterValue -= 1;
  value.textContent = counterValue;
}

btnIncrement.addEventListener("click", handleTargetBtnClickAdd);

function handleTargetBtnClickAdd() {
  counterValue += 1;
  value.textContent = counterValue;
}
