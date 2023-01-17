const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", handleTargetInputText);

function handleTargetInputText(event) {
  textOutput.textContent = event.currentTarget.value;
}
