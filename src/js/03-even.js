/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 2, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
let count = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    total += numbers[i];
    count += 1;
  }
}

console.log(count);
