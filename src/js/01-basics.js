/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// function foo(x, y, q) {
//     console.log(x, y, q)
// }

// foo(12, 23, 34);
// foo(99, 88);
// foo(77);
// foo();


// function sum(x, y) {
// }
// sum(10, 10);
// sum(5, 6);-399
// sum(1, 6);
// sum(3, 2);


// ===========================

// function foo(x, y) {
//     x = x ** 2;
//     y = y ** 2;
//     return x - y;
// }

// let result = foo(6, 5);
// console.log(result);
// ===========================
// foo foo1 foo2

// debugger;
// function foo() {
//     const x = 10;
//     console.log(x * 2);
//     console.log(x * 5);
// }
// function foo1(x, y) {
//     console.log(x * y)
//     console.log(x + y)
//     console.log(x - y)
// }

// debugger;

// console.log('before function foo');

// foo();

// console.log('after function foo');

// console.log('before function foo1');

// foo1(5, 10);

// console.log('after function foo1');

// ===========================

// function pow(x = 1, power = 5) {
//     console.log(x ** power)
// }
// pow(1, 5);

// ===========================

function sum(x, y) {
    const arr = Array.from(arguments);
    console.log(arr);
    // let result = 0;
    // for (let elem of arguments) {
    //     result += elem;
    // }
    // console.log(result);
}

// sum(1, 2, 5, 78, 2, 3, 7)

// function find(x) {
//     const arr = Array.from(arguments);
//     arr.shift();
//     return arr.includes(x);
// }

// const result = find(-123, 20, 30, 40, 60, 1, 3, 56, 7, 2, 4, 78, 9, 6, -123);
// console.log(result);


// ===========================

// function foo(x, y) {
//     if (x < 0 || y < 0) return NaN;

//     x = Math.sqrt(x);//4
//     y = Math.sqrt(y);//5
//     return x + y;
// }

// const result = foo(16, 25);
// console.log(result);


// ===========================


// function foo(){}

// const foo1 = function (x, y) {
//     console.log(PI);
// }


// ===========================


// let x = 10;
// let y = 20;
// const arr = [];
// const i = 20;

// console.log(j);

// function foo1(){
//     let j = 10;
//     console.log(i)
// }

// function foo2(){
//     console.log(i)
//     let j = 20;
// }


// foo();


// ===========================
// function bar() {
//     console.log("bar");
// }

// function baz() {
//     console.log("baz");
// }

// function foo() {
//     console.log("foo");
//     bar();
//     baz();
// }

// foo();

// function foo() {
//     console.log(1);
//     foo();
// }
// foo();


/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */


// function foo() {
//     foo1();
// }

// function foo1() {
//     foo2()
// }

// function foo2() {
//     console.log(x);
//     const x = 10;
// }

// foo();