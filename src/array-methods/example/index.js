//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 2400,
//     onSale: true,
//   }

//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 2400,
//     onSale: true,
//   }

// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
function getModels() {
  const result = cars.map(car => {
    return car.model;
  });
  return result;
}

// console.log(getModels());

// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с
// изменным значением свойства price в зависимости от переданной скидки.

function makeCarsWithDiscount(discount) {
  const result = cars.map(car => {
    const copyCar = { ...car };
    copyCar.price = copyCar.price * (1 - discount / 100);
    return copyCar;
  });
  return result;
}
// console.table(cars);
// console.table(makeCarsWithDiscount(20));

// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем
// значение параметра threshold.

function filterByPrice(threshold) {
  return cars.filter(car => car.price < threshold);
}

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

function getCarsOnSale() {
  return cars.filter(car => !car.onSale);
}

// console.table(getCarsWithDiscount());

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// function getCarsWithType(type) {
//   return cars.filter(car => !type || car.type === type);
// }

// console.table(getCarsWithType('sedan'));

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

function sortByAscendingAmount() {
  return [...cars].sort((a, b) => {
    return a.amount - b.amount;
  });
}

// console.table(sortByAscendingAmount());

// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// function sortByDescendingPrice() {
//   return [...cars].sort((a, b) => b.price - a.price);
// }

// console.table(sortByDescendingPrice());

// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

const getTotalAmount = cars => {
  return cars.reduce((acc, car) => {
    return acc + car.amount;
  }, 0);
};

// console.log(getTotalAmount(getCarsOnSale()));

// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars
  .filter(element => {
    return element.onSale;
  })
  .sort((a, b) => {
    // console.log('sorted');
    return a.price - b.price;
  });

// console.table(getSortedCarsOnSale);
// ================

const getCars = cars =>
  cars
    .filter(car => car.type === 'sedan')
    .sort((a, b) => b.model.localeCompare(a.model))
    .map(car => car.model);

console.table(getCars(cars));
// 5 * 1 = 5
// 5 * 0.5 = 2.5;
// 5 * 0.1 = 0.5;

// 5 * (0,9)

// ================================================
