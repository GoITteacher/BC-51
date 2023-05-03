/*
 * Создание промиса
 *  - Class Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  resolve(5);
});

/* function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
} */

promise
  .catch(err => {
    console.log('catch1');
    console.log(err);
    return 20;
  })
  .then(value => {
    console.log('then1');
    return value * 2;
  })
  .catch(err => {
    console.log('catch2');
    console.log(err);
    return 20;
  })
  .then(result => {
    console.log(result);
    console.log('then2');
    console.log(result / 4);
  })
  .catch(err => {
    console.log('catch3');
    console.log(err);
  })
  .finally(() => {
    console.log('The end!');
    return 200;
  });

// console.log(resultPromise);

// console.log(newPromise);
/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
