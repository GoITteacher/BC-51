/* Создайте объект calculator с тремя методами:
    - read(a, b)- принимает два значения и сохраняет их 
    как свойства объекта.
    - add() - возвращает сумму сохранённых значений.
    - mult() - перемножает сохранённые значения
     и возвращает результат.
*/

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

calculator.read(50, 27);
console.log(calculator.add());

calculator.read(2, 2);
console.log(calculator.add());

calculator.read(5, 5);
console.log(calculator.mult());
