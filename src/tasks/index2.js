class Phone {
  number;
  model;
  weight;

  constructor(number, model, weight) {
    this.number = number;
    this.model = model;
    this.weight = weight;
  }

  getPhone() {
    console.log(this.number, this.model, this.weight);
  }

  receiveCall(name) {
    console.log(`Call ${name}`);
  }

  receiveCall(name, name1, name2) {
    console.log(`Call ${name}`);
    console.log(`Call ${name1}`);
    console.log(`Call ${name2}`);
  }

  getNumber() {
    return this.number;
  }

  sendMessage(numbers) {
    numbers.forEach(number => {
      console.log(`Sended ${number}`);
    });
  }
}

const phone1 = new Phone('1', '1');
const phone2 = new Phone('2', '2', '2');
const phone3 = new Phone('3', '3', '3');

phone1.sendMessage(['1', '2', '3', '4', '5', '6']);
