// https://habr.com/ru/post/149516/

let f = function () {
  this.x = 5;
};

const obj = {
  foo: f,
};

obj.foo();
console.log(obj);
