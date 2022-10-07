let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');
let liItem1 = list.querySelector('li.active');
let liItem2 = list.querySelector(':scope > li.active');

console.log(liItem1);
console.log(liItem2);

const callback = () => {
  const elem = list.firstElementChild;
  console.log(elem.closest('li'));
};

myBtn.addEventListener('click', callback);

/* 
elem.parentNode - вибере батьківський elem.
elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
*/
