const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const makeElements = ingredients => {
  return ingredients.map(element => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = element;
    return itemEl;
  });
};

const elements = makeElements(ingredients);
ingredientsList.append(...elements);









