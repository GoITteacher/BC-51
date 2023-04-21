let myBtn = document.querySelector('#testButton');
let listElem = document.querySelector('ul');

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/

// let markup = '';
// for (let i = 0; i < 100; i++) {
//   markup += `<li>${i}</li>`;
// }

// listElem.innerHTML = listElem.innerHTML.replaceAll('li', 'h3');
// listElem.innerHTML += '<h1> END </h1>';

// listElem.textContent = markup;
// listElem.textContent = listElem.textContent.replaceAll('li', 'h3');
// listElem.textContent += '<h1> END </h1>';

listElem.innerHTML = '';
const markup = '<h3>The End</h3>';
listElem.insertAdjacentHTML('afterend', markup);
