/*
 * Перебор через for...in и Object.keys|values|entries
 */

let feed = {
  bad: 3,
  good: 5,
  neutral: 10,
};

// console.log(feed.toString());

let feedback = Object.create(feed);
feedback.test = 'myTest';

// for (const key in feedback) {
//   console.log(key);
// }

// =======================

// console.log(Object.keys(feed));
// console.log(Object.values(feed));

// for (const key of Object.keys(feed)) {
//   console.log(key, feed[key]);
// }

Object.entries(feed); // [ [key,value] [key,value] [key,value] ]
// for (const arr of Object.entries(feed)) {
//   console.log(arr[0], arr[1]);
// }

// for(const key of [])

// for (let key of Object.keys(feedback)) {
//   console.log(feedback[key]);
// }

// for (let key in feedback) {
//   if (feedback.hasOwnProperty(key)) console.log(feedback[key]);
// }

// console.log(feedback);

// console.log(feedback.hasOwnProperty('test'));
// let totalFeedback = 0;
