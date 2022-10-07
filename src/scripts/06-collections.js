let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');
let count = 0;
myBtn.addEventListener('click', () => {
  list.insertAdjacentElement('beforebegin', document.createElement('li'));
});

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/
