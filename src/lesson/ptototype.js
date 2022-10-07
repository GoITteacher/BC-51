//Прототипне наслідування

// Object;

// const baseAnimal = {
//   eyes: 2,
// };

// const animal = {
//   __proto__: baseAnimal,
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(baseAnimal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(dog.eyes);

// dog.isPrototypeOf(animal);
/* 

dog.isPrototypeOf(animal)
animal.__proto__ === dog   -> false



animal.isPrototypeOf(dog)
dog.__proto__ === animal   -> true

*/
