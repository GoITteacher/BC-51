let obj1 = {
  age: 'OBJ1',
  name: () => {
    console.log(this);
  },
};

let obj2 = {
  age: 'OBJ2',
  foo() {
    console.log(this);
    return this;
  },
};

let obj3 = {
  age: 'OBJ3',
  foo() {
    console.log(this);
    return this;
  },
};
