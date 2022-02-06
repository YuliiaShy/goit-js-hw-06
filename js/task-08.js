
const loginForm = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

loginForm.addEventListener('submit', onFormSubmit);
