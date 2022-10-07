/*
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
 - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
*/

let users = [
  {
    name: '123',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '123',
    age: 20,
    phone: '+28099854185',
  },
  {
    name: '123',
    age: 31,
    phone: '+280996161',
  },
];

// const findPhoneNumber = '+280996161';
// let findUser = users.find(user => {
//   return user.phone === findPhoneNumber;
// });

// console.table(findUser);
