/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const promise = new Promise((resolve, reject) => {
//   const numb = Math.random();
//   resolve(numb);
// });

/* function createPromise(value, delay, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
  return promise;
} */
/* 
const promise1 = createPromise('Hello', 1000, true);
const promise2 = createPromise('Error', 1000, false);
const promise3 = createPromise('Error 2', 1000, false);
 */
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

/* function createPromise(value) {
  return Promise.resolve(value);
  //   return Promise.reject('Error')
} */

// const result1 = createPromise(20);
// const result2 = createPromise();

// Promise.resolve(20).then(value => console.log(value))
// Promise.reject('Sorry')
//   .then(value => console.log(value))
//   .catch(console.log);

// =========================

function createPromise(value, delay, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
  return promise;
}

const p1 = createPromise('1', 1000, true);
const p2 = createPromise('2', 5000, true);
const p3 = createPromise('3', 3000, false);
const p4 = createPromise('4', 500, false);

const promises = [p1, p2, p3, p4];

console.log(promises);

// Promise.all(promises).then(result => {
//   console.log(result);
// });

// Promise.race(promises).then(res => console.log(res));

Promise.allSettled(promises).then(arr => {
  console.log(arr);
});
