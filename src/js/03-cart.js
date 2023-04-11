/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  getTotalPrice() {
    let total = 0;
    for (const elem of this.items) {
      total += elem.price;
    }
    return total;
  },
  increaseQuantity(productName, newCount = 1) {
    for (const elem of this.items) {
      if (elem.name === productName) {
        elem.count += newCount;
        break;
      }
    }
  },
  decreaseQuantity(productName, newCount = 1) {
    for (const elem of this.items) {
      if (elem.name === productName) {
        elem.count -= newCount;
        break;
      }
    }
  },
};

cart.add({ name: '🍎', price: 50, count: 10 });
cart.add({ name: '🍋', price: 60, count: 20 });
cart.add({ name: '🍋', price: 60, count: 30 });
cart.add({ name: '🍓', price: 110, count: 40 });

cart.remove('🍋');
console.log(cart.getItems());
console.log(cart.getTotalPrice());
cart.increaseQuantity('🍓', 10);
console.log(cart.getItems());
// =======================

// 15 % 8 = 7;
// 24 % 3 = 24 - (3*8) = 0
// 12 % 7 = 12 - (7*1) = 5
// 24 % 5 = 24 - (5*4) = 4
// 24 % 2 = 24 - (2*12) = 0
// 14 % 2 = 14 - (2*7) = 0
// 15 % 2 = 15 - (2*7) = 1

// const rand = Math.floor(Math.random() * 99999999999);
// console.log(rand % 50);
