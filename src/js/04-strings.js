// let myStr = 'Hello World';

/*
 * Длина строки, свойство length
 */

// console.log(myStr.length);
// '123123'.length;

/*
 * Конкатенация строк
 */

const firstName = 'Roman1';
const lastName = 'Roman2';
// const result = 'Hello ' + firstName + ' ' + lastName;
const result = `Hello my friend ${firstName + lastName}`;
console.log(result);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const x = 'FirstName';
const y = 'LastName';
const w = 'Hotel';
const q = '24';

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

// console.log(`Гость ${x} ${y} поселяется в ${w} номер ${q}`);

/*
 * Нормализация с методом toLowerCase()
 */

// let userName = 'userName';

// userName = userName.toLowerCase();
// console.log(userName.toUpperCase());
// console.log(userName);

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 =
  'Привет, ${} я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.toLowerCase().includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));
// console.log(string3.toLowerCase().includes(blacklistedWord2));
