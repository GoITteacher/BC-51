const exampleObj = {
  userName: 'Volodka',
  age: true,
  phoneNumber: '88888888',
  getName: null,
};

// const jsonStr = JSON.stringify(exampleObj);
// console.log(jsonStr);

// const data = JSON.parse(jsonStr);
// console.log(data);

let data;
try {
  data = JSON.parse('jsonStr');
} catch (err) {
  console.log(err);
  data = {
    name: 'Default',
  };
} finally {
  console.log(data);
}
