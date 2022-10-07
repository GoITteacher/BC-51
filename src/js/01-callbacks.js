/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

function kailyard(flag, callback1, callback2) {
    // for (let i = 0; i < maxCount; i++) {
    //     callback();
    // }
    if (flag) {
        callback1();
    } else {
        callback2();
    }
}

function x() {
    console.log('Копаю');
}

function y() {
    console.log('Поливаю');
}

function z() {
    console.log('Удобряю');
}

function b() {
    console.log('Збираю');
}

//kailyard(false, b, z);

/*
 * функция doMath(a, b, callback)
 */

function doMath(a, b, callback) {
    let result = callback(a, b);
    console.log(result);
}

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function pow(a, b) {
    return a ** b;
}

//doMath(5, 5, pow);

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// function handleBtnClick() {
//     console.log('Callback');
// }

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: интервалы
 */

function callback() {
    console.log('Через 2 секунды внутри колбека в таймауте');
}

// console.log('В коде перед таймаутом');

// setTimeout(function () {
//     console.log('test');
// }, 2000);

// console.log('В коде после таймаута');

// ================================================

const array = [1, 2, 3, 10, 5, 6, 7, 8];

function sum(prev, current) {
    return prev + current;
}
function max(max, current) {
    return max < current ? current : max;
}
function min(min, current) {
    return min > current ? current : min;
}

function myFor(start, array, callback) {
    for (let i = 0; i < array.length; i++) {
        start = callback(start, array[i]);
    }
    return start;
}

console.log(myFor(0, array, sum));
console.log(myFor(array[0], array, max));
console.log(myFor(array[0], array, min));
