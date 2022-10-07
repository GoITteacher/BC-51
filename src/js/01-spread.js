/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

/* const array = [1, 2, 5, 7, 2, 7];
const array1 = [1, 2, 3, 4];
//const newArray = array.concat([10], array1);
const newArray = [...array, '---------', ...array1];
console.log(newArray); */

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

const temps = [21, 17, 29, 24];
// const min = Math.max(...temps);

/* const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log('a: ', a);
console.log('b: ', b);

console.log(a[0] === b[0]);
console.log(a === b);

a[0].x = 1000;

console.log('a: ', a);
console.log('b: ', b); */

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

/* const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps); */

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

//const c = Object.assign({ name: 'Mango' }, a, b);
//console.log(c);

// const c = {
//   name: 'Mango',
//   ...a,
//   x: 1000,
//   ...b,
// };

// console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {};

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

/* const user = {
  name: 'Default',
  surname: 'Default',
  phoneNumber: 'Default',
};

const userData = {
  name: 'Volodka',
  surname: 'awdawdaw',
};

const resultUser = {
  ...user,
  ...userData,
};

console.log(resultUser);
 */
