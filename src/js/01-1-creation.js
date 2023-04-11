/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const obj = {
//   age: 20,
//   address: null,
//   phone: 'awdawd',
//   isStudent: true,
//   nam1: 'Myroslav',
//   school: 'sefsef',
// };

// console.log(obj);

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

const age = 35;

const prefix = 'user';

// const user = {
//   name: 'Marina',
//   age,
//   address: {
//     country: 'Ukraine',
//     city: 'Dnipro',
//     street: 'Awdawdaw',
//   },
//   friends: ['Mango', 'Kiwi'],
//   ['2zeegfsrgd%2131*1/']: 'test',
// };

const user = {
  name: 'Roman',
};
const address = {
  city: '',
};
user.address = address;

// console.log(user);
// console.log(user);
// console.log(user.address);
// console.log(user['address']);
// const key = true;
// console.log(user[key]);

// user.age = 25;
// user['age'] = 30;
// console.log(user);
// user.address.city = 'Lviv';
// console.log(user);

// user.newKey = 123;
// user['key'] = 'Test';
// user.money = 123;
// console.log(user.money);
// console.log(user);

// const num = [1, 2, 3, 45, 5];
// user[num] = 30;
// console.log(num.toString());
// user['jshrfgjawghdjawgdjahwgdjhasgrfjsdhrgfjshefjshfsjhefgjshegfjshefgjsehf'] =
//   'Test';
// console.log(user);

// const cat = {
//   name: 'MyCat',
//   getName() {
//     console.log(`My name's ${this.name}`);
//   },

//   getThis() {
//     console.log(this);
//   },
// };

// const dog = {
//   name: 'MyDog',
//   getName() {
//     console.log(`My name's ${this.name}`);
//   },

//   getThis() {
//     this.getName();
//   },
// };

// dog.getThis();

/*
 * Ссылочный тип {} === {}
 */

// console.log({ name: '123' } === { name: '123' });

/*
 * Массивы и функции это объекты
 */

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.test = 'Hello';
// console.log(arr);

// function foo() {}
// foo.test = 'Hello';
// console.log(foo.test);
