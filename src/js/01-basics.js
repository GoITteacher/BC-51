/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const newFriends = [[], [], [], []];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// let nums = [1, 2, 3, 4, 25, 6, 7, 5, 60];
// let findNums = [];
// let sum = 0;
// for (const num of nums) {
//   if (num % 5 === 0) {
//     findNums.push(num);
//     sum += num;
//   }
// }

// console.log(sum);

//split, join, indexOf, includes, push, pop, shift, unshift;

// let myStr = 'Hello-World-awd,sese-awdrg-awdse';
// let delimetr = '-';
// let words = myStr.split(delimetr);
// console.log(words);

// const resultFriends = friends.join(delimetr);
// console.log(resultFriends);

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Ajax', 'Ajax', ['end']];
// console.log(friends.indexOf('Ajax'));
// console.log(friends.lastIndexOf('Ajax'));

// console.log(friends.includes('Mango', 0));

let lastArray = friends.pop();
console.log(lastArray);
console.log(friends);
