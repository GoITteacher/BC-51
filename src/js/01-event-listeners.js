/*
 * Події
 * - Створення і видалення слyхача подій
 * - Патерни назв для слухачів подій
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ідентичність колбеків за посиланням
 * - Обєкт події (event)
 */

// handleTargetBtnClick
// targetBtnClickHandler
// onTargetBtnClick

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

// addListenerBtn.addEventListener('click', onAddBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveBtnClick);

targetBtn.addEventListener('click', onTargetBtnClick);

// ==========================
function onTargetBtnClick(e) {
  console.log(e.currentTarget);
}
function onAddBtnClick() {
  console.log('Add listener');
  targetBtn.addEventListener('click', onTargetBtnClick);
}
function onRemoveBtnClick() {
  console.log('remover Listener');
  targetBtn.removeEventListener('click', onTargetBtnClick);
}
// =========================
