/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає новий масив.
 - Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
 - Якщо колбек повернув true, елемент додається у масив, що повертається.
 - Якщо колбек повернув false, елемент не додається у масив, що повертається.
 - Якщо жоден елемент не задовольнив умову, повертає порожній масив.

*/

let array = [1, 3, 0, 1, 0, 78, 0, 6];
// let array = ['awdaw', 'awdaw', '', 'sefsef', '', 'awdaw', 'awdawd'];

// const result = array.filter((elem, index, array) => {
//   return index % 2 === 0;
// });
// const result = array.filter((elem, index, array) => {
//   return elem > 50;
// });

// const result = array.filter(e => e);

const result = array.filter((elem, index) => {
  const isPositive = elem > 0;
  const isOdd = elem % 2 !== 0;

  return isPositive && isOdd;
  //   return elem > 0 && elem % 1 !== 0 || elem <30 ;
});

console.log(result);
