/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення 
(дивимось чому дорівнює контекст бат функції)

- якщо звичайна, дивимось момент виклику 
(якщо контекст не готовий - дивимось батьківський 
  контектс)
*/

let user1 = {
  name: 'Petya',
  setName: function (name) {
    this.name = name;
  },
};

let user2 = {
  name: 'Vasya',
  age: 'TEST',
};

let newName = user1.setName.bind(user2);

newName.call(user1, 'New Name');

console.log(user1);
console.log(user2);
