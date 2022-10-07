/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

function findLogin(allLogins, login) {
  for (let loginItem of allLogins) {
    if (loginItem === login) {
      return `Пользователь ${login} найден.`;
    }
  }

  // for (let i = 0; i < allLogins.length; i += 1) {
  //   if (allLogins[i] === login) {
  //     return `Пользователь ${login} найден.`;
  //   }
  // }

  return `Пользователь ${login} не найден.`;
}

console.log(Math.min(1, 2, 3, 45, 6, 7, 8, 9));

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
