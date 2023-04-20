/* 

Определить класс USER, хранящий такую информацию о 
пользователе библиотеки:
ФИО
birthday
phoneNumber
*/

class User {
  firstname;
  lastname;
  patronymic;
  #age = 0;
  phoneNumber;

  constructor({ firstname, lastname, patronymic, age, phoneNumber }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.patronymic = patronymic;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }

  get age() {
    return this.#age;
  }
  set age(newValue) {
    if (typeof newValue === 'number' && newValue > this.age)
      this.#age = newValue;
  }
}

/* 
Определить класс Reader, хранящий такую информацию о 
пользователе библиотеки:

номер читательского билета,
факультет,
Методы takeBook(), returnBook(), findBook()
*/

class Reader extends User {
  numberTicket;
  faculty;
  #books = [];

  constructor(id, faculty, user) {
    super(user);
    this.numberTicket = id;
    this.faculty = faculty;
  }

  showReader() {
    console.log('----------------------');
    console.log(`Number Ticket: ${this.numberTicket}`);
    console.log(`FIO: ${this.firstname} ${this.lastname} ${this.patronymic}`);
    console.log(`AGE2: ${this.age}`);
    console.log('----------------------');
  }

  takeBook(...books) {
    this.#books.push(...books);
  }

  returnBook(...books) {
    this.#books = this.#books.filter(el => {
      return !books.includes(el);
    });
  }

  findBook(book) {
    return this.#books.includes(book);
  }

  get books() {
    return this.#books;
  }
}

let user = {
  lastname: 'Robin',
  patronymic: 'Vasylovych',
  age: 2000,
  phoneNumber: '9235235123',
  firstname: 'Maxim',
};

let reader1 = new Reader('123415', 'awdaa', { ...user });

console.log(reader1);
reader1.showReader();
reader1.takeBook('Hero', 'Hero2', 'Hero3');
reader1.takeBook('Hero1');
reader1.takeBook('Hero2');
reader1.returnBook('Hero', 'Hero1', 'Hero2');
console.log(reader1.books);
