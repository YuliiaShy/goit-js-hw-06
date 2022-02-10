
const loginForm = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    return;
  };

const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
 console.log(`${name}, ${value}`);
  });
  
  
  loginForm.reset();
};

loginForm.addEventListener('submit', onFormSubmit);
