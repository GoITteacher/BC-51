/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [100, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const sale = 10 / 100; //=> 0.1;

let sum = 0;

for (const price of cart) {
  sum += price;
}

console.log(sum * (1 - sale / 100));
