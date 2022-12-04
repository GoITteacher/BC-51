function f() {
  console.log(this);
  const foo = () => {
    this.x = 5;

    (function () {
      console.log(this);
    })();

    console.log(this);
  };

  return foo;
}

const obj = {
  name: 'obj',
};
let obj1 = {
  name: 123,
  foo1: f.call(obj),
};

obj1.foo1();
