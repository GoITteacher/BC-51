/* 
Создать класс Person, который содержит: 

переменные fullName, age;
методы move() и talk(), в которых просто вывести на консоль 
сообщение -"Такой-то  Person говорит". 

Добавьте универсальный конструктора  - Person()
 и Person(fullName, age).

Создайте два объекта этого класса. Один объект инициализируется 
конструктором Person(), другой - Person(fullName, age).
*/

class Person {
  constructor({ fullName = 'Default name', age = 0 } = {}) {
    this.fullName = fullName;
    this.age = age;
  }

  move() {
    console.log(`${this.fullName} moved`);
  }

  talk() {
    console.log(`${this.fullName} talk`);
  }
}

const person = new Person({ fullName: 'Alex D.', age: 30 });
const person1 = new Person({ age: 30 });
const person2 = new Person({ fullName: 'Alex D.' });
const person3 = new Person();

const user = {
  name: 'HELLO',
};
