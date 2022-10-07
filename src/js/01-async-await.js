import '../css/common.css';
import axios from 'axios';

/* fetch('users')
  .then(response => {
    return response.json();
  })
  .then(users => {
    return fetch('movie');
  })
  .then(response => {
    return response.json();
  })
  .then(movie => {
    console.log(movie);
  });

async function foo() {
  const users = await fetch('http://localhost:4040/users').then(res =>
    res.json(),
  );
  const params = users
    .map(user => {
      return user.books.map(id => {
        return `id=${id}`;
      });
    })
    .flat()
    .join('&');
  const books = await fetch(`http://localhost:4040/books?${params}`).then(res =>
    res.json(),
  );
}

foo();

async function foo1() {
  const users = await fetch('users').then(res => res.json());
  const books = fetch(`/books?${params}`).then(res => res.json());
} */

// async function foo2() {
//     fetch('users')
//     .then(response => {
//       return response.json();
//     })

//     await fetch('users');
//     console.log('Ok');

//     fetch('users')
//     .then(()=>{
//       console.log('Ok');
//     })

// }

// TRY CATCH

/* async function testFoo() {
  try {
    const res1 = await fetch(`http://loalhost:4040/boo`);
    console.log('end');
  } catch {}
}

try {
  setTimeout(() => {
    console.log('err');
  }, 5000);
} catch {
  console.log('test Fooo Err');
}

console.log('end');
 */

async function foo() {
  const prom1 = fetch(`http://localhost:4040/books`);
  const prom2 = fetch(`http://localhost:4040/users`);
  const prom3 = fetch(`http://localhost:4040/rooms`);

  const users = await fetch('users');
  const promises = [prom1, prom2, prom3];
  const response = await Promise.all(promises);

  console.log(response);
  // response = await Promise.all(promises);
  //console.log(response);
}

foo();
