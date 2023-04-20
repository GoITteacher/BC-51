class Phone {
  constructor(number = 'Default', model = 'Default', weight = 'Default') {
    this.number = number;
    this.model = model;
    this.weight = weight;
  }

  getPhone() {
    console.log(this.number);
    console.log(this.model);
    console.log(this.weight);
  }

  receiveCall(...names) {
    for (let name of names) {
      console.log(`Hello ${name} - ${this.number}`);
    }
  }

  getNumber() {
    console.log(this.number);
  }

  sendMessage(numbers) {
    numbers.forEach(num => {
      console.log(`Hello ${num},it\`s ${this.number}!`);
    });
  }
}

const phone1 = new Phone('3809234', 'Iphone 12');
const phone2 = new Phone('+3809234', 'Iphone 13', 200);
const phone3 = new Phone('+3809234', 'Iphone 14', 200);

phone1.getPhone();
phone1.getNumber();

// phone1.sendMessage(['1', '2', '3', '4', '5', '6']);

phone1.receiveCall('test', 'test1', 'test2', 'test3');
