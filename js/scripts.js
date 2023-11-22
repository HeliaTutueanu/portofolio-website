(function() {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#email');
  
  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
    }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    return isValidEmail;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();   // do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })

  function showErrorMessage(input, message) {
    let container = input.parentElement
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  emailInput.addEventListener('input', validateEmail);
})();