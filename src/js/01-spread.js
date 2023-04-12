/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const arr = [1, 2, 3, 4, 5, 6, 6];
// const arr1 = [...arr];
// console.log(arr);
// console.log(arr1);
// console.log(arr === arr1);

// console.log(arr);
/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [21, 17, 29, 24];
// console.log(Math.min(...temps));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const baseArr = ['hello', 'test', 'world'];
// arr.splice(4, 1, ...baseArr);
// console.log(arr);

// arr.push(...baseArr);
// for(const elem of baseArr){
//     arr.push(elem)
// }

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

// const arr1 = [1, 2, 3, 4, 56, 1];
// const arr2 = [3, 68, 8, 2, 56, 8, 9];
// const arr3 = [9, 7, 65, 2, 5, 7, 9];
// const arr = [...arr3, ...arr3, ...arr3];

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const user = {
  name: 'Volodymyr',
  age: 22,
  city: 'Dnipro',
  login: 'test',
};

const user1 = {
  city: 'Lviv',
};

const user2 = {
  name: 'Max',
};

const newUser = { name: 'default', ...user, ...user1, ...user2 };

const newObj = {
  login: null,
  password: null,
  ...user,
};

console.log(newObj);
