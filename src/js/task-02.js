const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");

console.log(list);

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.setAttribute("class", "list-item");
  item.textContent = ingredient;
  console.log(item);
  return item;
});
console.log(ingredientsItems);
list.append(...ingredientsItems);
