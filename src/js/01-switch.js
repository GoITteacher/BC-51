const country = 'Canada';

/* switch (country) {
  case 'Canada':
    console.log('Sale - 10%');
    break;
  case 'Ukraine':
    console.log('Sale - 20%');
    break;

  default:
    console.log('Sale - 5%');
    break;
} */

/* switch (country) {
  case 'Canada':
    console.log('Sale - 10%');
    break;

  case 'Ukraine':
  case 'Polsha':
  case 'Egypt':
    console.log('Sale - 20%');
    break;

  default:
    console.log('Sale - 5%');
    break;
}

console.log('END'); */

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

let stars = 10;
let price;

switch (stars) {
  case 1:
    price = 20;
    break;
  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 70;
    break;
  case 5:
    price = 120;
    break;
  default:
    console.log('Такого кол-ва звезд нет');
    break;
}

if (price) {
  console.log(`Ціна - ${price}$`);
}

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
