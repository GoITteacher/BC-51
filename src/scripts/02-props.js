let myBtn = document.querySelector('#testButton');
let imgElem = document.querySelectorAll('img');

myBtn.addEventListener('click', onBtnClick);
function onBtnClick() {
  const firstElem = imgElem[0];
  console.log(firstElem.attributes);
}

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

/* 
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"
*/
