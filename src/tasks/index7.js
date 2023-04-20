class Product {
  static discount = 10;
  price;
  name;
  count;

  static #counter = 0;

  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;

    Product.#counter += count;
  }

  getInfo() {
    console.log('Name:', this.name);
    console.log('Price:', this.price);
    console.log('Count:', this.count);
    console.log('Discount:', Product.discount + '%');
    console.log('Total Price:', this.getTotalPrice());
    console.log('--------------------');
  }

  getTotalPrice() {
    const discount = 1 - Product.discount / 100;
    return this.count * this.price * discount;
  }

  static get counter() {
    console.log('Total count product -', Product.#counter);
  }
}

const prod1 = new Product('Apple', 10, 100);
const prod2 = new Product('Kiwi', 6, 400);
const prod3 = new Product('Mango', 7, 1000);

prod1.getInfo();
prod2.getInfo();
prod3.getInfo();

Product.counter;
