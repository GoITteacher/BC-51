/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/
// let array = [1, 6, 1, 5, 8, 2, 1];

// let newArray = array.map((value, index, array) => {
//   if (index > 0) {
//     value += array[index - 1];
//   }

//   if (index < array.length - 1) {
//     value += array[index + 1];
//   }

//   return value;
// });

// console.table(newArray);
