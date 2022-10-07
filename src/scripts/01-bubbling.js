/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parrent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.parrent.addEventListener('click', e => {
  console.log(
    `Target: ${e.target.dataset.value}`,
    `CurrentTarget: ${e.currentTarget.dataset.value}\n\n`,
  );
  e.stopPropagation();
});

refs.child.addEventListener('click', e => {
  console.log(
    `Target: ${e.target.dataset.value}`,
    `CurrentTarget: ${e.currentTarget.dataset.value}`,
  );
});

refs.descendant.addEventListener('click', e => {
  console.log(1);
  //e.stopImmediatePropagation();
});

refs.descendant.addEventListener('click', e => {
  console.log(2);
  e.stopImmediatePropagation();
});

refs.descendant.addEventListener('click', e => {
  console.log(3);
  //e.stopImmediatePropagation();
});

let COUNT_CLICK = 0;
document.body.addEventListener('click', () => {
  COUNT_CLICK++;
  console.log(COUNT_CLICK);
});
