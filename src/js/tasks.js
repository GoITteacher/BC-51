// Створи масив з кількох чисел і додай до нього
//  нові елементи, використовуючи операцію spred.

// let nums = [1, 2, 3, 4, 5, 6];
// const myNums = [99, 98, 97, 91, 323];

// nums.push(...myNums);
// nums = [...nums, ...myNums];
// nums.splice(nums.length, 0, ...myNums);

// console.log(nums);

// =====================

/* Створи функцію, яка приймає об'єкт 
з даними користувача (ім'я, прізвище, 
електронна пошта, номер телефону) та 
повертає тільки ім'я та прізвище, 
використовуючи деструктуризацію. */

// function foo({ firstName, lastName, phoneNumber = 'Standart' }) {
//   return [firstName, lastName, phoneNumber];
// }

// const user = {
//   firstName: '1',
//   lastName: '2',
//   email: '',
//   location: 'test',
//   isStudent: true,
// };

// console.log(foo(user));

// =====================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [x1, x2, x3, ...newNums] = nums;
// const result = [...newNums, x3, x2, x1];
// console.log(result);

// ====================

function generateId(user) {
  return { ...user, id: Math.round(Math.random() * 1000) };
}

const user = {
  firstName: '1',
  lastName: '2',
  email: '',
  location: 'test',
  isStudent: true,
};

// console.log();

const result = generateId(user);
console.log(user, result);

// ========================

function copy(obj) {
  return { ...obj };
}

console.log(Math.random());
