const items = categories.querySelectorAll("li.item");
const allItems = items.length;
console.log(`Number of categories: ${allItems}`);

items.forEach((item) => {
  const title = item.firstElementChild;
  console.log(`Category: ${title.textContent}`);
  const elements = item.lastElementChild.children.length;
  console.log(`Elements: ${elements}`);
});
