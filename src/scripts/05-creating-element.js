let myBtn = document.querySelector('#testButton');
let listElem = document.querySelector('.usernames');

/* 
Створення
document.createElement(tagName);
*/

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

myBtn.addEventListener('click', () => {
  listElem.remove();
});

/* 
Видалення
elem.remove();
*/
