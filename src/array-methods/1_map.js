/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.map((element, index, array) => {
//   return element * index;
// });

// [0, 2, 6,12,20,30,42]
// console.log(arr);
// console.log(result);
// ==============================

const users = [
  { name: 'Max', age: 20 },
  { name: 'Mariya', age: 21 },
  { name: 'Julia', age: 23 },
];

// const names = users.map(user => {
//   return user.name;
// });

const result = users.map(({ name, age }) => {
  const str = `<h3>${name}</h3><span>${age}</span><hr>`;
  return str;
});
