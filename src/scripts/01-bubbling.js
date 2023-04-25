/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.descendant.addEventListener('click', e => {
  console.log('descendant');
  e.stopPropagation();
});

refs.child.addEventListener('click', e => {
  console.log('child');
  e.stopPropagation();
});

refs.parent.addEventListener('click', e => {
  console.log('parent');
  e.stopPropagation();
});
