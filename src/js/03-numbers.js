/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// const age = prompt('Enter age'); // '22'
// const numAge = Number.parseInt(age);
// console.log(age, numAge);

/*
 * - Метод число.toFixed(digits)
 */

const num = 123;
console.log(num.toFixed(0));

/*
 * - Мет operation
 */

// const num1 = 10;
// const num2 = 50;

// let res1 = num1 + num2; //60
// let res2 = num1 - num2; //60
// let res3 = num1 * num2; //60
// let res4 = num1 / num2; //60

// let res5 = (num1 - num2) * num1; // -490
// console.log(Math.pow(2, 3));

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// const str = '234';
// console.log(Number(str));
// console.log(+str);

// let num123 = 10;
// num123++;
// console.log(num123);

// num = num + 1;
// num += 1;
// num -= 1;
// num *= 1;
// num /= 1;

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// let res6 = 2 ** 3; //8
// Math.pow(2, 3);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
//  2. попросить ввести степень и сохранить в переменную
//  3. Возвести введенные данные в степень и вывести

// let userNum = prompt('Enter num');
// let power = prompt('Enter power');

// const result = Number(userNum) ** Number(power);
// console.log(result);
/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

console.log(Math.round(Math.random() * 1000));

// const number = 0.7;
// console.log();
// console.log(Math.ceil(number));
// console.log(Math.floor(number));
