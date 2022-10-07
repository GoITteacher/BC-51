function sortByValueAndIndex(array) {
  return array
    .map((value, index) => {
      return {
        original: value,
        forSortingValue: value * (index + 1),
      };
    })
    .sort((a, b) => {
      return a.forSortingValue - b.forSortingValue;
    })
    .map(value => {
      return value.original;
    });
}

let array = [1, 2, 5, 1, 7, 9, 4, 1];

console.log(sortByValueAndIndex(array));

// https://www.codewars.com/kata/58e0cb3634a3027180000040
