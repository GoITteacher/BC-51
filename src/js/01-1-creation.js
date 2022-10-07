/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

let user = {
  name: 'Volodka',
  age: 23,
  isVip: false,
  adress: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: '....',
    house: {
      first: '1',
      second: '2',
    },
  },
  getName() {
    console.log(this.name);
  },
};

let user2 = {
  name: 'Volodka2',
  age: 23,
  isVip: false,
  adress: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: '....',
    house: {
      first: '1',
      second: '2',
    },
  },
  getName() {
    console.log(this.name);
    console.log(this.getAge());
  },

  getAge() {
    return this.age;
  },
};

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

let user3 = {
  ['key']: 'test key',
};

user['1,2,3,4'];

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

/*
 * Ссылочный тип {} === {}
 */

/*
 * Массивы и функции это объекты
 */
