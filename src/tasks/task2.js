function sortByBinaryOnes(list) {
  return list
    .map(value => {
      return value.toString(2);
    })
    .sort((a, b) => {
      let countA = a.split('').filter(char => char === '1').length;
      let countB = b.split('').filter(char => char === '1').length;

      if (countA != countB) {
        return countB - countA;
      } else {
        if (a.length != b.length) return a.length - b.length;
        else {
          return parseInt(a, 2) - parseInt(b, 2);
        }
      }
    })
    .map(value => {
      return parseInt(value, 2);
    });
}

let array = [195, 195, 7, 3, 5, 21, 25];
console.log(sortByBinaryOnes(array));
