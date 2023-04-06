/*
 * Цикл while
 */

// debugger;
// let userName;
// while (!userName) {
//   userName = prompt('Enter your name');
// }

// console.log('end');

/*
 * Цикл do while
 */

// const num = 10;

// while (num > 20) {
//   console.log('OK');
// }

// debugger;
// let num = 0;

// do {
//   console.log(num);
//   num += 1;
// } while (num < 20);

/*
 * Цикл for
 */

// for (let i = 0; i < 500; i++) {
//   console.log(i);
// }

// for (let i = 500; i > 0; i -= 1) {
//   console.log(i);
// }

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// debugger;
// for (let i = 0; i < employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   totalSalary += salary;
// }

// console.log(totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

let min = 0;
let max = 1000000;
let sum = 0;

// debugger;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// min = min % 2 === 0 ? min : min + 1;
// for (let i = min; i <= max; i += 2) {
//   sum += i;
// }

// console.log(sum);

// debugger;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0 && i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 50; i++) {
//   let sum = 0;
//   if (i % 2 === 0 && i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// console.log(sum);

// console.log('end');

for (let i = 0; i < 10; i++) {
  console.log();
}
