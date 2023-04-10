/*
 * Напиши функцию logItems(items) для перебора и 
логирования массива
 */


const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function logItems(items) {
    for (const num of items) {
        console.log(num);
    }
}

logItems(cart);