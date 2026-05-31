const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', writeDataFromStorage);
function writeDataFromStorage() {
  const dataFromStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (dataFromStorage) {
    formData.email = dataFromStorage.email;
    formData.message = dataFromStorage.message;

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
