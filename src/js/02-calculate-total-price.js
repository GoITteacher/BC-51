/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// function calculateTotalPrice(items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

const calculateTotalPrice = function (items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

let total1 = calculateTotalPrice(cart);

let total2 = calculateTotalPrice(cart);

let total3 = calculateTotalPrice(cart);

console.log(total3);
