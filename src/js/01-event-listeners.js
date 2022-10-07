/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

addListenerBtn.addEventListener('click', onAddListenerBtnClick);
removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
divContainer.addEventListener('click', onContainerClick);

function onAddListenerBtnClick() {
  targetBtn.addEventListener('click', onTargetBtnClick);
}

function onRemoveListenerBtnClick() {
  targetBtn.removeEventListener('click', onTargetBtnClick);
}

function onTargetBtnClick(event) {
  console.log(event.target);
  console.log(event.currentTarget);
}

function onContainerClick(event) {
  console.log('Target -> ', event.target);
  console.log('Current Target -> ', event.currentTarget);
}
