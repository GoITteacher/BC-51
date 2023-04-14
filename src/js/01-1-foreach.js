const array = [5, 1, 2, 8, 2, 3, 1, 2];

const myPow = (elem = 2, index = 7, array) => {
  console.log(elem ** array[index + 1]);
};

// function mySqrt(num) {
//   console.log(Math.sqrt(num));
// }

// function myLog(elem, index) {
//   console.log(`Elem №${index + 1} - ${elem}`);
// }

// array.forEach(myPow);

const TEXT = 'Elem';
array.forEach((elem, index, array) => {
  console.log(TEXT, index, elem);
});

// const myFun1 = (elem, index, array) => {
//   console.log(elem ** index);
// };
// const myFun2 = (elem, index, array) => {
//   console.log(elem ** index);
// };

// array.forEach(myFun1, myFun2);
