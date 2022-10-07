/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

let nums = [2, 6, 6, 7, 3, 7, 9, 2, 2, 3, 6, 9];
let minIndex = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= nums[minIndex]) minIndex = i;
}

nums[minIndex] *= 10;

console.log(nums);
