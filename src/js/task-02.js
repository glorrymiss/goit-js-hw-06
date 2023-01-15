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
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.setAttribute("class", "item");
  item.textContent = ingredient;
  list.appendChild(item);
});
