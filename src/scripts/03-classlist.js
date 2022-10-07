let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');

const callback = () => {
  console.log(listItem.classList.replace('js-list', 'test'));
  console.log(listItem.classList.value);
};

//myBtn.addEventListener('click', callback);

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
myBtn.addEventListener('click', () => {
  if (myBtn.classList.contains('data-true')) {
    myBtn.style.backgroundColor = 'black';
    myBtn.style.borderRadius = '10px';
  } else {
    myBtn.style.backgroundColor = 'red';
    myBtn.style.borderRadius = '5px';
  }

  myBtn.classList.toggle('data-true');
});
