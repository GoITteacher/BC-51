/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

// class User {}

// const poly = new User();
// console.log(poly); // {}

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

// class User {

//   name;

//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }

// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// mango.phone;

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// class Car {
//   isNew = true;

//   constructor({ speed = '80', model, price = 5000, type }) {
//     this.model = model;
//     this.speed = speed;
//     this.price = price;
//     this.type = type;
//   }

//   getModel() {
//     console.log(this.price);
//   }
// }

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// let car1 = new Car(options);

// car1.getModel();

// class User {
//   static counterName = 0;
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     User.counterName++;
//     console.log(this.#name);
//     return this.#name;
//   }
// }

// let user = new User('Volodka');
// let user1 = new User('Volodka1');
// let user2 = new User('Volodka2');
// let user3 = new User('Volodka3');

// user.name;
// user1.name;
// user2.name;
// user3.name;

// console.log(User.counterName);

// =======================================

class User {
  #number;
  number;

  getInfo() {
    console.log(this.#name);
    console.log(this.name);
  }
}

class Worker extends User {
  experience;
  static BaseUser;
  constructor(exp, name, age, phoneNumber) {
    super(name, age, phoneNumber);
    this.experience = exp;
  }

  getExp() {
    console.log(this.experience);
  }
}

let worker = new Worker(10, 'testName', 20, '00000000');

console.log(worker);
worker.getExp();
