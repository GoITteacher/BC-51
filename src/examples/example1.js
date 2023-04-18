/* 
Напишите метод calcTotalPrice(stoneName), который
принимает название камня и рассчитывает и возвращает 
общую стоимость камней с таким именем, ценой и количеством 
из свойства stones
*/

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const findStone = this.stones.find(el => {
      return el.name === stoneName;
    });

    return findStone.price * findStone.quantity;
  },
};

const chopShop1 = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 1 },
    { name: 'Diamond', price: 2700, quantity: 2 },
    { name: 'Sapphire', price: 1400, quantity: 3 },
    { name: 'Ruby', price: 800, quantity: 4 },
  ],
  calcTotalPrice(stoneName) {
    const findStone = this.stones.find(el => {
      return el.name === stoneName;
    });

    return findStone.price * findStone.quantity;
  },
};

console.log(chopShop1.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop1.calcTotalPrice('Ruby')); // 1600
