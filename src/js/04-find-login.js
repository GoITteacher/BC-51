/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];


function findLogin(allLogins, login) {
    // const temp = allLogins.includes(login);
    // if (temp) {
    //     console.log(`Пользователь ${login} найден.`)
    // } else {
    //     console.log(`Пользователь ${login} не найден.`)
    // }

    // ========================

    // return (allLogins.includes(login)) ? console.log(`Пользователь ${login} найден.`) : console.log(`Пользователь ${login} не найден.`)
    return console.log(`Пользователь ${login} ${allLogins.includes(login) ? '' : 'не'} найден.`)
}


function findLogin2(allLogins, login) {

    for (const elem of allLogins) {

        if (elem === login) {
            console.log(`Пользователь ${login} найден.`);
            return;
        }
    }

    console.log(`Пользователь ${login} не найден.`)
}



findLogin(logins, 'm4ngoDoge')