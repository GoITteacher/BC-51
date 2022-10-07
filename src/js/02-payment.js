/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [100, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const sale = 10;

for (let i = 0; i < cart.length; i++) {
  cart[i] = cart[i] * (1 - sale / 100);
}

console.log(cart);

let sum = 0;
for (const value of cart) {
  sum += value;
}

console.log(sum);
