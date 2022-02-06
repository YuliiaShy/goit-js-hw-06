function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const buttonEl = document.querySelector('.change-color');

const spanColorEl = document.querySelector('.color');

const onChangeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', onChangeColor);
