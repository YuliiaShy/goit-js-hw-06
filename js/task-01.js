
const listEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.length);

listEl.forEach(function (element) {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
