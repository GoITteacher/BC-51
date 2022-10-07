/*
 * Работа с коллекцией (массивом объектов)
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

let friendName = 'Mango';

console.log('---------------');
for (let friend of friends) {
  if (friend.name === friendName) console.log(friend);
}

/*
 * Получаем имена всех друзей
 */

let friendsName = [];
for (let friend of friends) {
  friendsName.push(friend.name);
}
console.log(friendsName);

/*
 * Получаем имена только друзей которые онлайн
 */

let onlineFriendsName = [];
let offlineFriendsName = [];
for (let friend of friends) {
  if (friend.online) onlineFriendsName.push(friend.name);
  else offlineFriendsName.push(friend.name);
}
console.log(onlineFriendsName);
console.log(offlineFriendsName);
// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй
