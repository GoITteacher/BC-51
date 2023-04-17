/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає все, що завгодно.
 - Робить все, що завгодно.

*/

// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const result = array.reduce((acc, elem, index, arr) => {
//   if (index % 2 === 0) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);

const users = [
  { name: 'Max', age: 20 },
  { name: 'Mariya', age: 21 },
  { name: 'Julia', age: 23 },
];

// const result = users.reduce((acc, elem, index, array) => {
//   return acc + elem.age;
// }, 0);

const result = users.reduce((acc, elem, index, array) => {
  return elem + index;
}, []);
console.log(result);
