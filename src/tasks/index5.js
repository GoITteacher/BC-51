/* 

Определить класс USER, хранящий такую информацию о 
пользователе библиотеки:
ФИО
birthday
phoneNumber
*/

/* 
Определить класс Reader, хранящий такую информацию о 
пользователе библиотеки:

ФИО,
номер читательского билета,
факультет,
Дата рождения,
телефон.
Методы takeBook(), returnBook(), findBook()
*/

let user = {
  surname: 'awdaw',
  patronymic: '12312',
  birthday: '12312',
  phoneNumber: '12312',
  firstname: 'awd',
};

let reader1 = new Reader('123415', 'awdaa', { ...user });
