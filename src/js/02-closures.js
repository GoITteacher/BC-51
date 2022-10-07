/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
/ 
*/

function myFoo(y) {
    function test(x) {
        console.log(y + x);
    }

    return test;
}

const resultFunction1 = myFoo(200);
const resultFunction2 = myFoo(100);

resultFunction1(10);
resultFunction1(20);
resultFunction1(30);

resultFunction2(10);
resultFunction2(20);
resultFunction2(30);
