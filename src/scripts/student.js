export class Student {
  name;
  age;
  university;
  phoneNumber;

  constructor(name, age, university, phoneNumber) {
    this.age = age;
    this.name = name;
  }

  sayName() {
    console.log('Hello', this.name);
  }
}

export function templateMarkup(arr) {
  return arr.map(el => `<li>${el}</li>`).join('');
}
