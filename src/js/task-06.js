const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

console.log(inputLength);

input.addEventListener("blur", handleTargetInputTextControl);

function handleTargetInputTextControl(event) {
  console.log(event);

  const { currentTarget } = event;
  const { value } = currentTarget;
  console.log(value);
  input.classList.remove("valid");
  input.classList.remove("invalid");
  if (value.trim().length === inputLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
