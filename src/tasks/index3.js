/* 
Создать класс Person, который содержит: 

переменные fullName, age;
методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то  Person говорит". 

Добавьте два конструктора  - Person() и Person(fullName, age).

Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).
*/

class Person {
  fullName;
  age;

  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  move() {
    console.log(`${this.fullName} move!`);
  }

  talk() {
    console.log(`${this.fullName} move!`);
  }
}
