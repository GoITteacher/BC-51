/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
  console.log(e.target.value);
}

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onCheckBoxChange);

function onCheckBoxChange(e) {
  refs.btn.disabled = !e.currentTarget.checked;
}
