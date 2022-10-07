/*
 * Цикл while
 */

// while (i > min && i <= max) {
//   if (i === 77) continue;
//   console.log(i);
//   i++;
// }

//5 / 2 = 2.5
//12 % 2 = 12-12 = 0
//13 % 2 = 13-12 = 1
//1234123 % 100 === 0-99

/*
 * Цикл do while
 */
// do {
//   console.log(i++);
// } while (false);

/*
 * Цикл for
 */

// const maxLen = 11;
// let res = '';
// for (let i = 0; i < maxLen; i++) {
//   for (let j = 0; j < maxLen; j++) {
//     if (i === 0 || i === maxLen - 1 || j === 0 || j === maxLen - 1) res += 1;
//     else if (i === maxLen - j - 1 || i === j) res += '0';
//     else res += ' ';
//     res += ' ';
//   }
//   res += '\n';
// }

// console.log(res);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

for (let i = 0; i < employees; i++) {
  let salary =
    Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  totalSalary += salary;
}
console.log('totalSalary', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

let min = 0;
let max = 10;
let res = 0;
for (let i = min; i <= max; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    res += i;
  }
}
console.log(res);
