/*
 * Події
 * - Створення і видалення слехача подій
 * - Патерни назв для слухачів подій
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ідентичність колбеків за посиланням
 * - Обєкт події (event)
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');
