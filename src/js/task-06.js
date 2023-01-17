const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

console.log(inputLength);

input.addEventListener("blur", handleTargetInputTextControl);

function handleTargetInputTextControl(event) {
  console.log(event);
  console.log(event.currentTarget.value);
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === inputLength) {
    input.classList.add("valid");
  } else if (event.currentTarget.value.length !== inputLength) {
    input.classList.add("invalid");
  }
}
