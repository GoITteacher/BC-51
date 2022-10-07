const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

// ===============================================
const myMouseMoveEv = _.throttle(onMouseMove, 300);

document.addEventListener('mousemove', myMouseMoveEv);

function onMouseMove() {
  countMouseEventElement.textContent = ++countMouseEvent;
}
// ===============================================

// ===============================================

const options = {
  leading: true,
  maxWait: 2000,
  trailing: true,
};

const myInputChagneEve = _.debounce(onInputChange, 300, options);

inputElement.addEventListener('input', myInputChagneEve);

function onInputChange(e) {
  outputElem.textContent = ++countInputEvent;
}
// ===============================================
