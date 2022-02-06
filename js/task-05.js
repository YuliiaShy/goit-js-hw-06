
const textInput = document.querySelector('#name-input');

const spanOutput = document.querySelector('#name-output');

const onOutputName = event => {
  if (event.currentTarget.value === '') {
    spanOutput.textContent = 'Anonymous';
  } else {
    spanOutput.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener('input', onOutputName);
