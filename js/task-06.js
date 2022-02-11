
const validationInput = document.querySelector('#validation-input');

const DatasetLength = parseInt(document.querySelector('#validation-input').dataset.length);

const onInputValid = event => {
  if (event.currentTarget.value.length === DatasetLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.addEventListener('blur', onInputValid);
