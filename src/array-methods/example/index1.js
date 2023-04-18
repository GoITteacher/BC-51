/* 
      id: 389,
      type: 'clothing',
      name: 'Puma T-shirt',
      quantity: '1',
      originalPrice: '15.99',
    },
*/
// function calculateProductsAmountByType(type) {
//   return order.items.reduce((total, item) => {
//     return item.type === type ? total + +item.quantity : total;
//   }, 0);
// }

// console.log(calculateProductsAmountByType('shoes'));

// function calculateTotalOrderPrice() {
//   return order.items.reduce((total, elem, index, array) => {
//     total += elem.quantity * elem.originalPrice;
//     return total;
//   }, 0);
// }

// console.log(calculateTotalOrderPrice());

// function calculateTotalOrderPriceAfterDiscount() {
//   return order.items.reduce((total, el) => {
//     const price = el.salePrice || el.originalPrice;
//     total += el.quantity * price;
//     return total;
//   }, 0);
// }

// const result = calculateTotalOrderPriceAfterDiscount();
// console.log(result);

function findSearchWordInItemName(oneName) {
  return order.items.filter(elem => {
    return elem.name.includes(oneName);
  });
}

const res = findSearchWordInItemName('Nike');
console.log(res);

function isIdIncludesInOrder(id) {
  return order.items.some(elem => elem.id === id);
}

console.log(isIdIncludesInOrder(234));
