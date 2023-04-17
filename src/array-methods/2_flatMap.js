/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

let objs = [
  {
    name: '123',
    friend: ['Jonh1', 'Marta1'],
  },

  {
    name: '123',
    friend: ['Jonh2', 'Marta3'],
  },

  {
    name: '123',
    friend: ['Jonh4', 'Marta5'],
  },

  {
    name: '123',
    friend: ['Jonh6', 'Marta7'],
  },
];

const friends = objs.flatMap((elem, index) => {
  return elem.friend;
});
console.log(friends);

// let array = [2, 1, 2, 3, 4, 5, [1, 2, 3]];
// const arr1 = [1, 2, 3, 4, 4, 5, 6];

// let result = array.flatMap((elem, index, array) => {
//   return elem;
// });

// console.log(array);
// console.log(result);
