import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};
const inputName = refs.form.elements.name;
const inputMessage = refs.form.elements.message;

function loadDataFromLS() {
  const name = getItemFromLS('inputName');
  const message = getItemFromLS('inputMessage');

  inputName.value = name;
  inputMessage.value = message;
}

loadDataFromLS();

function getItemFromLS(key) {
  let data = localStorage.getItem(key);
  try {
    data = JSON.parse(data);
  } catch {
    console.log('Error Parsing');
  }
  return data;
}

function setItemToLS(key, value) {
  const jsonFormat = JSON.stringify(value);
  localStorage.setItem(key, jsonFormat);
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  setItemToLS('inputName', '');
  setItemToLS('inputMessage', '');
});

inputName.addEventListener('input', e => {
  const value = e.target.value;
  setItemToLS('inputName', value);
});

inputMessage.addEventListener('input', e => {
  const value = e.target.value;
  setItemToLS('inputMessage', value);
});
