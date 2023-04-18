function f(x, y) {
  //this = obj

  function foo() {
    this.x = 5;
    console.log(this);
  }

  return foo;
}

const obj = {
  name: 'obj',
};

let obj1 = {
  name: 123,
  foo1: f.call(obj, 10, 20),
};

obj1.foo1.call(obj);

/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення 
(дивимось чому дорівнює контекст бат функції)

- якщо звичайна, дивимось момент виклику 
*/
