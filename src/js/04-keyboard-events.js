/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
  inputElem: document.querySelector('.js-input'),
};

// document.addEventListener('keydown', e => {
//   console.log(e);
//   console.log(e.code);
//   console.log(e.charCode);
//   console.log(e.key);
//   console.log(e.keyCode);
// });

/* document.addEventListener('keyup', e => {
  console.log('UP', e.code);
}); */

/* refs.inputElem.addEventListener('keypress', e => {

  if (e.code === 'KeyQ' && e.shiftKey) console.log('Press', e.code);
}); */

/* refs.inputElem.addEventListener('keydown', e => {
  e.preventDefault();
  console.log(e.code);
}); */
