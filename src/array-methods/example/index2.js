/* 
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  }
*/

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user, index, array) => {
      return user.gender === gender;
    })
    .map((user, index, array) => {
      return user.name;
    });
};
console.log(getUsersWithGender(users, 'male'));

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color.toLowerCase());
// };

// console.log(getUsersWithEyeColor(users, 'blue'));

/* const getUserNames = users => {
  return users.map(user => user.name).sort();
};

console.log(getUserNames(users)); */

function foo() {
  return 'Hello';
}

foo().toLowerCase().toUpperCase().replace(' ', '');
