/* //Класи
/* 
  -Оголошення класу +
  -Конструктор класу +
  -Об'єкт параметрів +
  -Методи класу +
  -Приватні властивості (Інкапсуляція) +
  -Геттери і сеттери +
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

class Person {
  static #counter = 0;
  name;
  #age;
  phone;

  constructor({ name, age, phone = 'Non' }) {
    this.name = name;
    this.#age = age;
    this.phone = phone;
    Person.#counter += 1;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (typeof newAge === 'number' && newAge > 0 && newAge < 100) {
      this.#age = newAge;
    } else {
      console.log('Error');
    }
  }
  showName() {
    console.log('Name:', this.name);
  }
  showAge() {
    console.log('Age:', this.age);
  }
  showPhone() {
    console.log('Phone:', this.phone);
  }
  showInfo() {
    console.log('--------------');
    this.showName();
    this.showAge();
    this.showPhone();
    console.log('--------------');
  }

  static getCounter() {
    console.log(Person.#counter);
  }

  static getName(x, y) {
    return x + y;
  }
}

let arr = [];

for (let i = 0; i < 5; i++) {
  const user = new Person({
    age: 123,
    phone: '234234',
    name: 'Roman',
  });

  arr.push(user);
}

arr = [];

Person.getCounter();
// const user2 = new Person('Max', 22, '123234523');
// const user3 = new Person('Anton', 34, 'sfsrgdth');

class Tesla {
  model;
  #maxSpeed;

  constructor(model, maxSpeed) {
    this.model = model;
    this.#maxSpeed = maxSpeed;
  }

  showInfo() {
    console.log('Tesla model -', this.model);
    console.log('Max speed -', this.#maxSpeed);
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(newMaxSpeed) {
    this.#maxSpeed = newMaxSpeed;
  }
}

// const tesla = new Tesla('X', 250);

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт.
Проте, часто потрібно створити багато однотипних об'єктів з 
однаковим набором властивостей, але різними значеннями і
методами для взаємодії з ними. Все це потрібно робити динамічно,
під час виконання програми. З цією метою використовують класи - 
спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================
