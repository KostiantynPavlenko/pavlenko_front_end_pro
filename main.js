const helpForm = document.querySelector('.help-form');

function showErrorMessage(selector, message){
  const errorElement = document.getElementById(`error-${selector}`);
  errorElement.textContent = message;
}

helpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(helpForm);
  const nameValue = formData.get('name').trim();
  const messageValue = formData.get('message').trim();
  const phoneValue = formData.get('phone').trim();
  const emailValue = formData.get('email').trim();

  const phoneNumberRegExp = /^\+380\d{9}$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isFormValid = true;

  if(!nameValue) {
    showErrorMessage('name', 'Name is required');
    isFormValid = false;
  } else {
    showErrorMessage('name', '');
  }

  if(!messageValue) {
    showErrorMessage('message', 'Message is required');
    isFormValid = false;
  } else if (messageValue.length < 5) {
    showErrorMessage('message', 'Message must be more than 5 characters');
    isFormValid = false;
  } else {
    showErrorMessage('message', '');
  }

  if(!phoneValue) {
    showErrorMessage('phone', 'Phone is required');
    isFormValid = false;
  } else if (!phoneNumberRegExp.test(phoneValue)) {
    showErrorMessage('phone', 'Please enter valid phone number');
    isFormValid = false;
  } else {
    showErrorMessage('phone', '');
  }

  if(!emailValue) {
    showErrorMessage('email', 'Email is required');
    isFormValid = false;
  } else if (!emailRegExp.test(emailValue)) {
    showErrorMessage('email', 'Please enter valid email');
    isFormValid = false;
  } else {
    showErrorMessage('email', '');
  }

  if (isFormValid) {
    console.log(nameValue);
    console.log(messageValue);
    console.log(phoneValue);
    console.log(emailValue);

    helpForm.reset();
  }
});