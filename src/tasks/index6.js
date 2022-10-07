/* 
Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value

*/

class StringBuilder {
  value;
  #max;

  static Roles = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };

  constructor(initialValue) {
    this.value = initialValue;
  }

  get max() {
    return this.#max;
  }

  set max(max) {
    this.#max = max * 2;
  }
}

class User extends StringBuilder {
  constructor() {
    super('awd');
    this.max = 20;
    console.log(this.max);
  }
}

let obj = new User();
