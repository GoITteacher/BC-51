/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean('')); //false;
// console.log(Boolean(0)); //false;
// let num; //undefined

// console.log(Boolean(undefined));
// console.log(Boolean(null));

// let address = null;

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
//  */

// const temp1 = true; //false
// const temp2 = true;

// console.log(temp1 && temp2); //false

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

const temp1 = 'Test'; //true
const temp2 = 'Hello'; //true

//1 + 0 = 1;
//0 + 1 = 1;
//0 + 0 = 0;

console.log(); //temp2(true)

// 1 + 0 + 0 + 0 = 1;//false
/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

console.log(!true && true);
