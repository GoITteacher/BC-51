/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */
// const obj = { a: 1, b: 2, c: 4, x: 1, y: 2, q: 5 };
// let { a, b, c } = obj;
// console.log(a, b, c);

// let { x, y, q, b } = obj;
// console.log(x, y, q, b);

// const x = 10;
// let { x: myX, y: myY, q: myQ } = obj;
// let myX = obj.x;
// console.log(myX, myY, myQ);

// const nums = { x: 10, y: 20, pow: 2 };
// const { x: myX, y: myY, pow: myPow } = nums;
// console.log((myX + myY) ** myPow);

// function foo({ x, y }) {
//   console.log(x, y);
// }
// foo(nums);

// function foo1(x) {
//   const x = 10;
// }

// foo1(10);

/*
 * Глубокая деструктуризация
 */

// const user = {
//   name: 'Max',
//   age: 25,
//   address: {
//     city: 'Dnipro',
//     country: 'Ukraine',
//   },
//   x: 2,
// };

// let { x = 10, x: myX = 10 } = user;
// console.log(x);
/*
 * Деструктуризация массивов
 */

const nums = [555, 222, 333, 4, 5, 6, 7, 6, 2, 4, 7, 9, 2];
// const [x1, x2, x3] = nums;
// console.log(x1, x2, x3);

/*
 * Операция rest (сбор)
 */

const [, , , ...args] = nums;
console.log(args);

const user = {
  name: 'Max',
  age: 123,
  city: 'Dnipro',
  country: 'Ukraine',
  login: 'test',
  password: 'test',
};
const { name, age, ...myProps } = user;
console.log(myProps);

// ==================

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

function foo(name, age, login, password, phoneNumber, country, city) {
  // console.log();
}

foo('Ivan', 20, 'ivan20', 'ivan23', '123345235', 'Dnipro', 'Ukraine');
foo('Ivan', 20, 'ivan20', 'ivan23', '123345235', 'Ukraine', 'Dnipro');

function foo1({ age, name, ...props }) {
  console.log(name, age);
}

const myUser = {
  name: 'Ivan',
  login: 'ivan20',
  password: 'testpass',
  country: 'Ukraine',
  city: 'Dnipro',
  phoneNumber: '12323534534',
  age: 20,
};

foo1(myUser);
