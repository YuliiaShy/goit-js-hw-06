
let counterValue = 0;

const decrementBtn = document.querySelector("[data-action=decrement]");

const incrementBtn = document.querySelector("[data-action=increment]");

const valueEl = document.querySelector("#value");

const onIncrementBtn = () => { counterValue += 1; };

const onDecrementBtn = () => { counterValue -= 1 };

decrementBtn.addEventListener("click", () =>
{ onDecrementBtn(); valueEl.textContent = counterValue; })

incrementBtn.addEventListener("click", () =>
{ onIncrementBtn(); valueEl.textContent = counterValue; })






