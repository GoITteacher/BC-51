// Прототипне наслідування

// Object;

// const parent = {
//   name: 'Parent',
//   showName() {
//     console.log('Parent');
//   },
// };

// const child = Object.create(parent);

// console.log(child.__proto__ === parent);
// console.log(parent);

// ==============================

const parent = {
  name: 'Parent',
  isParent: true,
};

const child = {
  name: 'Alex',
  age: 23,
  phone: '123123',
};

child.__proto__ = parent;

console.log(child);
