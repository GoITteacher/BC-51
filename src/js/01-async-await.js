import '../css/common.css';
import axios from 'axios';

const axiosV2 = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// function getCurrentComment(user, post, comment) {
//   return axiosV2
//     .get('/users')
//     .then(({ data }) => {
//       const userObj = data[user - 1];
//       return axiosV2.get(`/posts?userId=${userObj.id}`);
//     })
//     .then(({ data: data2 }) => {
//       const postElem = data2[post - 1];
//       return axiosV2.get(`/comments?postId=${postElem.id}`);
//     })
//     .then(({ data: data3 }) => {
//       const commentElem = data3[comment - 1];
//       return commentElem;
//     });
// }

async function getCurrentComment(user, post, comment) {
  try {
    const { data } = await axiosV2.get('/users');
    const userObj = data[user - 1];

    const { data: data2 } = await axiosV2.get(`/posts?userId=${userObj.id}`);
    const postElem = data2[post - 1];

    const { data: data3 } = await axiosV2.get(
      `/comments?postId=${postElem.id}`,
    );

    const commentElem = data3[comment - 1];
    return commentElem;
  } catch {
    return null;
  }
}

getCurrentComment(20, 2, 4).then(comment => {
  console.log(comment);
});
