/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', e => {
  //console.log(e.code, e.ctrlKey, e.shiftKey, e.altKey);
  if (e.ctrlKey && e.code === 'KeyQ' && !e.shiftKey) {
    console.log('ctrl + Q');
  }
});

refs.clearBtn.addEventListener('click', onClearOutput);
function onClearOutput() {
  refs.output.textContent = '';
}
