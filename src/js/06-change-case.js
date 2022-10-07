/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// function changeCase(string) {
//   string = string.split('');
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === string[i].toLowerCase()) {
//       string[i] = string[i].toUpperCase();
//     } else {
//       string[i] = string[i].toLowerCase();
//     }
//   }
//   return string.join('');
// }

// function changeCase2(string) {
//   let res = '';
//   for (let symbol of string) {
//     if (symbol === symbol.toLowerCase()) {
//       res += symbol.toUpperCase();
//     } else {
//       res += symbol.toLowerCase();
//     }
//   }
//   return res;
// }

// function changeCase1(string) {
//   console.log(string);
//   return 123;
// }

// function rec(number) {
//   if (number < 0) return number;
//   return rec(number - 1);
// }

function min() {
  let array = Array.from(arguments);
  let minValue = array[0];
  for (let elem of array) {
    if (minValue > elem) {
      minValue = elem;
    }
  }
  return minValue;
}

console.log(min(2, 3, 5, 6, -29));
