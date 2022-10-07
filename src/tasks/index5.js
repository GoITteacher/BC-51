/* 

Определить класс Reader, хранящий такую информацию о пользователе библиотеки:

ФИО,
номер читательского билета,
факультет,
Дата рождения,
телефон.
Методы takeBook(), returnBook().


*/

class User {
  firstname;
  surname;
  patronymic;
  #birthday;
  phoneNumber;

  constructor({ firstname, surname, patronymic, birthday, phoneNumber } = {}) {
    this.firstname = firstname;
    this.surname = surname;
    this.patronymic = patronymic;
    this.#birthday = birthday;
    this.phoneNumber = phoneNumber;
  }

  set birthday(birthday) {
    if (2022 - birthday.split('.')[2] > 14) this.#birthday = birthday;
  }

  get birthday() {
    return this.#birthday;
  }
}

/* 
номер читательского билета,
факультет,
Методы takeBook(), returnBook().
*/

class Reader extends User {
  numberTicket;
  facultet;
  #books;
  countReadedBook;

  constructor(numberTicket, facultet, user) {
    super(user);
    this.numberTicket = numberTicket;
    this.facultet = facultet;
    this.#books = [];
    this.countReadedBook = 0;
  }

  showInfo() {
    /* Object.entries(this).forEach((elem) => {
      //console.log(elem.join(" - "));
      //console.log(`${elem[0]} - ${elem[1]}`);
    }); */

    let result = Object.entries(this)
      .map(elem => {
        return elem.join(' - ');
      })
      .join('\n');

    console.log(result);
  }

  takeBook(book) {
    this.#books.push(book);
  }

  returnBook(findBook) {
    this.countReadedBook;
    let length = this.#books.length;
    this.#books = this.#books.filter(book => {
      return book == findBook;
    });
    if (length > this.#books.length) this.countReadedBook++;
  }

  isArrears() {
    return !(this.#books.length === 0);
  }

  findBook(findBook) {
    return this.#books.some(book => book === findBook);
  }
}

let user = {
  surname: 'awdaw',
  patronymic: '12312',
  birthday: '12312',
  phoneNumber: '12312',
  firstname: 'awd',
};

let reader1 = new Reader('123415', 'awdaa', { ...user });
