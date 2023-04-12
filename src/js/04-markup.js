const profiles = [
  { name: 'Max', age: 20, location: 'Ukraine Dnipro' },
  { name: 'Ivan', age: 25 },
  { name: 'Roman', age: 23, location: 'Ukraine Kyiv' },
  { name: 'Volodymyr', age: 22 },
  { name: 'Alina', age: 21, location: 'Ukraine Lviv' },
];

const listElem = document.querySelector('.js-list');
for (const profile of profiles) {
  console.log(foo(profile));
}

function foo({ name, age, location = 'Земля' }) {
  return `
<li>
  Name: ${name},
  Age: ${age},
  Location: ${location}
</li>
`;
}
