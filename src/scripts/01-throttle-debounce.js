const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

function onDocumentMouseMove(e) {
  countMouseEvent += 1;
  countMouseEventElement.textContent = countMouseEvent;
}
// document.addEventListener('mousemove', _.throttle(onDocumentMouseMove, 300));

function onInputChange(e) {
  outputElem.textContent = e.target.value;
}

inputElement.addEventListener('input', _.debounce(onInputChange, 1000));
