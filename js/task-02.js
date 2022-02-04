const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList); 

const elements = ingredients.map(element => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  return itemEl;
})

ingredientsList.append(...elements);

console.log(elements);







