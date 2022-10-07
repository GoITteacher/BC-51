/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const firstLoginToFind = 'm4ngoDoge';
const secondLoginToFind = 'k1widab3st';

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     console.log(`Пользователь ${loginToFind} найден.`);
//     break;
//   } else if (i === logins.length - 1) {
//     console.log(`Пользователь ${loginToFind} не найден.`);
//   }
// }

// if (logins.indexOf(loginToFind) === -1) {
//   console.log(`Пользователь ${loginToFind} не найден.`);
// } else {
//   console.log(`Пользователь ${loginToFind} найден.`);
// }

// if (logins.includes(firstLoginToFind) || logins.includes(secondLoginToFind)) {
//   console.log(`Пользователь найден.`);
// } else {
//   console.log(`Пользователь ${firstLoginToFind} не найден.`);
// }

// let findLogin = null;
// findLogin = logins.includes(firstLoginToFind) ? firstLoginToFind : null;
// findLogin = logins.includes(secondLoginToFind) ? secondLoginToFind : null;

// let message = findLogin
//   ? `Пользователь ${findLogin} найден.`
//   : `Пользователь ${findLogin} не найден.`;

// console.log(message);
