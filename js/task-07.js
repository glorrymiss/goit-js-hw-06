const inputRange = document.getElementById("font-size-control");
const outText = document.getElementById("text");
console.log(inputRange.min);

inputRange.addEventListener("input", handleTargetInputRange);

function handleTargetInputRange(event) {
  outText.style.fontSize = `${event.currentTarget.value}px`;
}
