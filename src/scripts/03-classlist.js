let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

/* 
Властивість style
*/
listItem.style.backgroundColor = 'red';
listItem.style.fontSize = '10px';
listItem.style.color = 'green';
listItem.style.display = 'flex';

console.log();
