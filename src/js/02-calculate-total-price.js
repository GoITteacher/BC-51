/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function calculateTotalPrice(items) {
    let sum = 0;

    for (const num of items) {
        sum += num;
    }

    return sum;
}


let total1 = calculateTotalPrice(cart);

let total2 = calculateTotalPrice([1, 6, 2, 5, 78, 8, 3, 5, 7, 8, 2]);

let total3 = calculateTotalPrice([3, 3, 7, 8, 8, 3, 4, 7, 8]);

console.log(total1);
console.log(total2);
console.log(total3);