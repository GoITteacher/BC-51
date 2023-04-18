/* 
Контекст виконання функції
*/

// Вася біжить швидко, тому що Петя намагається зловити поїзд.
// Вася біжить швидко, тому що він намагається зловити поїзд.

// const obj1 = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// const obj2 = {
//   name: 'Vasya',
//   showName: obj1.showName,
// };

// obj1.showName();
// obj2.showName();

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

// function foo() {
//   console.log(this);
// }
// foo(); //window undefined

// const obj = {
//   name: 'Vasya',
//   foo() {
//     console.log(this);
//   },
// };
// obj.foo();

// function test() {
//   console.log(this);
// }
// function foo(call) {
//   const user = {
//     name: 'test',
//     show: call,
//   };
//   user.show();
// }
// foo(test);

// const showThis = () => {
//   console.log(this);
// };
// const user = {
//   show: showThis,
// };
// user.show();

/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення 
(дивимось чому дорівнює контекст бат функції)

- якщо звичайна, дивимось момент виклику (якщо контекст не готовий - дивимось батьківський контектс)
*/

//- this у callback функціях
//- this у стрілочних функціях

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

const me = {
  name: 'Volodymyr',
  showThis() {
    console.log('Hello', this.name);
  },
};

// function show() {
//   console.log(this);
// }

// const copyFun = show.bind(user1);
// copyFun.call(user2);
// copyFun();
// copyFun.apply(user3);

// me.foo().apply(user3)

// 11 - arrow func
// 7  - bind
// 5  - call apply
// 3  - obj
// 1  - undefined
// ==============================
const user1 = {
  name: 'Petya',
};
const user2 = {
  name: 'Vasya',
};
const user3 = {
  name: 'Julia',
};

// function foo(x, y, q) {
//   console.log(arguments);
//   console.log(this.name, x, y, q);
// }

// const copyFun = foo.bind(user3, 10, 20, 30);

// copyFun(1, 2, 3);
