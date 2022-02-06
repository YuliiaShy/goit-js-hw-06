
const fontSizeControl = document.querySelector('#font-size-control');

const textEL = document.querySelector("#text");

const onTextFontSize = (event) => {
textEL.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeControl.addEventListener("input", onTextFontSize);

