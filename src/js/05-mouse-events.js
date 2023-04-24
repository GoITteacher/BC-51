/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

/* boxRef.addEventListener('mouseenter', e => {
  boxRef.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', e => {
  boxRef.classList.remove('box--active');
}); */

// boxRef.addEventListener('mouseover', e => {
//   console.log('active');
// });

// boxRef.addEventListener('mouseout', e => {
//   console.log('mouseout');
// });

let counter = 0;
boxRef.addEventListener('mousemove', e => {
  console.log(e);
});
