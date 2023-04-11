/*
 * Работа с коллекцией (массивом объектов)
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

function findFriend(friends, name) {
  for (const user of friends) {
    if (user.name === name) {
      return true;
    }
  }

  return false;
}

console.log(findFriend(friends, 'awd'));

/*
 * Получаем имена всех друзей
 */

function getNames(friends) {
  const arr = [];
  for (const user of friends) {
    arr.push(user.name);
  }

  console.log(arr);
}

getNames(friends);

/*
 * Получаем имена только друзей которые онлайн
 */

function getNamesOnline(friends) {
  const online = [];
  const offline = [];
  for (const user of friends) {
    if (user.online) online.push(user.name);
    else offline.push(user.name);
  }
  console.log(online, offline);
}

getNamesOnline(friends);

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй
