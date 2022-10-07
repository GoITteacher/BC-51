/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає все, що завгодно.
 - Робить все, що завгодно.

*/

// let result = array.reduce((prev, value, index, array) => {
//   prev.push(value);
//   return prev;
// }, []);

// function reduce(array, callback, init) {
//   let accumulator = init;
//   let initI = 0;

//   if (accumulator === undefined) {
//     accumulator = array[0];
//     initI = 1;
//   }

//   for (let i = initI; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//   }

//   return accumulator;
// }

// reduce(array, (prev, value, index, array) => {
//   console.log(index);
// });

//      -10  -9    -8    -7         ......        -2
// let array = [0, 23, 5, 6, 1, 67, 8, 1];
// let result = array.reduce((prev, value, index, array) => {
//   //console.log(prev);
//   return prev + 1;
// }, -10);

// console.log(result);
