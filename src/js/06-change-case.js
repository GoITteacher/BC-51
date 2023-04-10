/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */


function changeCase(string) {
    const arr = string.split('');

    for (let i = 0; i < arr.length; i += 1) {
        const isUpperCase = arr[i] === arr[i].toUpperCase();
        if (isUpperCase) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }

        // arr[i] = (arr[i] ===
        //     arr[i].toUpperCase()) ?
        //     arr[i].toLowerCase() :
        //     arr[i].toUpperCase();
    }

    return arr.join('')
}

const result = changeCase('JavaScript');
console.log(result);