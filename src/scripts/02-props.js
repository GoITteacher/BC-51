let myBtn = document.querySelector('#testButton');
let imgElem = document.querySelectorAll('img');

myBtn.addEventListener('click', onBtnClick);
function onBtnClick() {
  console.log('Hello');
  let src = myElem.getAttribute('src');
  src = src.replace('eat', 'car');

  myElem.setAttribute('src', src);
  console.log(myElem);
}

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

const myElem = document.querySelector('#imgTest1');
console.log(myElem);
// console.dir(myElem.hasAttribute('src'));
// console.dir(myElem.hasAttribute('lazy-load'));
// myElem.removeAttribute('alt');
// myElem.attributes.src.value = 'awdawd';
// ======================================

myElem.dataset.userName = 'TEST';
console.log(myElem.dataset['userName']);
