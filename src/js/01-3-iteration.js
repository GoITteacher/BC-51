/*
 * Перебор через for...in и Object.keys|values|entries
 */

let feed = {
  bad: 3,
  good: 5,
  neutral: 10,
};

let feedback = Object.create(feed);
feedback.test = 'myTest';

// for (let key of Object.keys(feedback)) {
//   console.log(feedback[key]);
// }

// for (let key in feedback) {
//   if (feedback.hasOwnProperty(key)) console.log(feedback[key]);
// }

let totalFeedback = 0;
