
const validationInput = document.querySelector('#validation-input');

const onInputValid = event => {
  if (event.currentTarget.value.length == validationInput.dataset.length) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.addEventListener('blur', onInputValid);
