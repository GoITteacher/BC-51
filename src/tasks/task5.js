// https://habr.com/ru/post/149516/

const user1 = {
  name: 'user1',
};
const user2 = {
  name: 'user2',
};

let f = function () {
  console.log(this);
};

const obj = {
  foo: f.bind(user1),
};

const copyFun = obj.foo.bind(user2);

copyFun();
