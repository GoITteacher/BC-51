let elem = {
  value: 'Привіт',
};

function func(surname, name) {
  //this = elem
  let obj1 = {
    foo: () => {
      console.log(this);
    },
  };

  return obj1.foo;
}

const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
myFunc();
