/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 */

// const myFoo = function (x,y,q){
//     console.log(x,y,q);
// }
// const myFoo1 = (x,y,q) => {
//     console.log(x,y,q);
// }

// const sum1 = (x, y) => {
//   console.log(x);
//   console.log(y);
//   Math.pow(x, y);
//   x + y;
// };

// const sum2 = (x, y) => x + y;

// const result = sum2(10, 20);
// console.log(result);
/// ================================

const foo = (...args) => {
  console.log(args);
  console.log(Math.max(...args));
  console.log(Math.min(...args));
};

function foo1() {
  console.log(arguments);
  console.log(Math.max(...args));
  console.log(Math.min(...args));
}

const foo3 = (...args) => {
  console.log(args);
};

function foo4() {
  console.log(arguments);
}

foo3(1, 2, 3, 4, 67, 3, 1, 3, 4, 6, 8, 9);
