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

// let myName = 'Volodymyr';
// let users = ['', myName, 'Roman'];
// users[0] = 'NewValue';
// console.log(users, users[0]);

// const num = 10;
// const array1 = [1, 2, 3];
// const array2 = array1;

// array1[0] = 100;
// console.log(array2[0]);

// const array = [1, 2];
// console.log(array[array.length]);
// array[array.length - 1]

// const array = [123, 223, 5456, 567, 123, 546];
// array[0] = 234;

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

// const num = 10;
// const num2 = num;

// const array = [];
// const array2 = array;

// [1, 2, 3, 4] === [1, 2, 3, 4];

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// array[0] = 10;
// debugger;
/* for (let i = 2; i < array.length / 2; i += 2) {
    if (i % 3 === 0) {
      console.log(i, array[i]);
    }
    array[i] = array[i] / 2;
    array[i] /= 2;
} */

// const users = ['VolodYmyr', 'MyrOslav', 'MArInA'];
// for (const user of users) {
//   console.log(user.toLowerCase());
// }

// console.log(array);
// const array = [34, 56, 2, 66, 3, 778, 23, 12, 568, 345, 112];

/*
 * - split - "awdawdawd" => ['','','']
 * - join - ['a','b','c'] => ""
 * - indexOf
 * - includes
 * - push
 * - pop
 * - shift
 * - unshift
 * - concat
 * - splice
 * - slice
 */

// const nums = [1, 2, 45, 6, 2, 6, 8, 3, 78, 7, 3, 23, 5];

// const str = 'Hello World! My name is Volodymyr';
// console.log(str.split(' ').length);
// console.log(friends.join('\n\t'));

// const index = friends.indexOf('Ajax', 4);
// const lastIndex = friends.lastIndexOf('Nuawd');

// friends[index] = 'VipPoly';

// console.log(index);
// =================================

// includes
// console.log(friends.includes('Kiwi'));

// =================================

// push

// console.log(friends.push('test1', 'test2', 'test3'));
// const friends = ['FirstElem', 'Mango', 'Ajax', 'Kiwi', 'Poly', 'LastElem'];
// console.log(friends);
// friends.unshift('test1', 'test2', 'test3');
// friends.unshift('test2');
// friends.unshift('test3');

// =================================

// pop shift
// for (let i = 0; i < 3; i++) {
//   console.log(friends.pop());
// }
// console.log(friends.pop());
// console.log(friends.shift());
// console.log(friends);

// =================================

// const users1 = [1, 2, 3, 4, 5];
// const users2 = [4, 67, 2, 5, 2, 1];

// const resultUsers = [].concat([1, 2, 3, 4], [9, 8, 7], users1, users2);

// console.log(resultUsers);
// console.log(users1);
// console.log(users2);
// =================================

// splice slice
// const friends = ['FirstElem','TEST1', 'TEST2', 'TEST3' , 'Kiwi', 'Poly', 'LastElem'];
const friends = ['FirstElem', 'Mango', 'Ajax', 'Kiwi', 'Poly', 'LastElem'];
// const result = friends.slice();
// const result = friends.slice(-3, -1);
// console.log(result);
// console.log(friends);
// friends.splice(1, 2, true, 344);
// friends.splice(5, 0, 55, 66, 77);
console.log(friends);
