/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name1: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   lastName: 'lastName',
//   year: null,
// };

//const name = 'Program';

//const { lastName = 'Default' } = playlist;
//const lastName = playlist.lastName ?? 'Default';

//const { lastName: newLastName = 'Default'} = playlist;

/* const {
  name1: newName,
  year = 2000,
  lastName: newLastName = 'Default',
  trackCount,
} = playlist;

console.log(newLastName); */

/*
 * Глубокая деструктуризация
 */

/* const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
}; */

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 200, 100, 235, 623, 45, 6, 783, 1];

// const [red, , blue, ...args] = rgb;

// let [x1, x2, ...rest] = '123234';
// console.log('x1', x1);
// console.log('x2', x2);
// console.log(rest);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// function myFoo({phonenumber,lastname,firstName, age, patromymic}) {

// }

// const phonenumber = 'test'
// const firstName = 'test'
// const lastname = 'test'
// const patromymic = 'test'
// const age = 'test'

// myFoo({firstName, lastname, patromymic,age ,phonenumber})

// const array = [
//   { x: 11, y: 21, z: 31 },
//   { x: 12, y: 22, z: 32 },
//   { y: 23, z: 33 },
//   { x: 14, y: 24, z: 34 },
//   { y: 25, z: 35 },
//   { x: 16, y: 26, z: 36 },
//   { y: 27, z: 37 },
// ];

// for (let { x, y, z } of array) {
//   console.log(x, y, z);
// }

function showDataMsg(msg) {}
