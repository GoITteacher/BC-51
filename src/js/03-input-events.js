/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  inputElem: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
  formElem: document.querySelector('.js-form'),
};

/* refs.inputElem.addEventListener('focus', e => {
  console.log('focus');
});

refs.inputElem.addEventListener('blur', e => {
  const value = e.target.value;
  if (value.length < 6) {
    e.target.style.border = '1px solid red';
  } else {
    e.target.style.border = '1px solid green';
  }

  console.log(e);
}); */

refs.inputElem.addEventListener('input', e => {
  const value = e.target.value;
  console.log(value);
  if (value.length > 0) {
    refs.nameLabel.textContent = value;
  } else {
    refs.nameLabel.textContent = 'Anonym';
  }
});

refs.licenseCheckbox.addEventListener('change', e => {
  const isChecked = e.target.checked;
  refs.btn.disabled = !isChecked;
});
