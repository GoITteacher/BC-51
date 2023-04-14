/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

const test = function (x, y) {
  console.log(x, y);
};

// function foo(x) {
//   10, 20;
// }

// foo(test);

/*
 * функция doMath(a, b, callback)
 */

function doMath(a, b, callback) {
  callback(a, b);
}

const sum = function (x, y) {
  console.log(x + y);
};

const multiply = function (x, y) {
  console.log(x * y);
};

const divide = function (x, y) {
  console.log(x / y);
};

// const log = function (x, y) {
//   console.log(x, y);
// };

// doMath(10, 20, sum);
// doMath(2, 2, multiply);
// doMath(8, 2, divide);
// doMath(8, 2, log);

/*
 * Отложенный вызов: регистрация событий
 */

const btnElem = document.querySelector('.js-button');

function myCallback() {
  console.log(10 * 10);
  console.log('Hello');
}

btnElem.addEventListener('click', myCallback);

/*
 * Отложенный вызов: интервалы
 */

// setTimeout(myCallback, 5000);
// myCallback();

// ================================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function foo(arr, callback1, callback2) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      callback1(arr[i], i);
    } else {
      callback2(arr[i], i);
    }
  }
}

function mySqrt(x) {
  console.log(Math.sqrt(x));
}

function myPow(num, power) {
  console.log(num ** power);
}

foo(arr, myPow, mySqrt);
