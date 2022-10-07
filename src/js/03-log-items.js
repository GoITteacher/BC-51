/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const joinV2 = function (items, del) {
  let result = '';
  for (const item of items) {
    result += item + del;
  }

  result = result.slice(0, del.length * -1);
  // result = result.slice(0, result.length - del.length);
  console.log(result);
  return result;
};

joinV2(['Mango', 'Kiwi', 'Poly', 'Ajax'], '---');
joinV2([1, 2, 3, 4, 5], ',');
joinV2(['клавиатура', 'наушники', 'часы'], ';');
