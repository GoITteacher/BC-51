/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

/* formElem.addEventListener('submit', e => {
  e.preventDefault();
  const myForm = e.target;

  const email1 = myForm.elements.email1.value;
  const email2 = myForm.elements.email2.value;
  const email3 = myForm.elements.email3.value;
  const password = myForm.elements.password.value;
  const subscription = myForm.elements.subscription.value;

  console.log(email1, email2, email3, password, subscription);
}); */

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const myForm = e.target;

  const formData = new FormData(myForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
  e.target.reset();
});

// Object.keys
// Object.values
// Object.entries
