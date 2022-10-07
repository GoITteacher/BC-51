/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onModalKeyDownClose);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) onCloseModal();
}

function onModalKeyDownClose(e) {
  if (e.key === 'Escape') onCloseModal();
}

function onCloseModal() {
  window.removeEventListener('keydown', onModalKeyDownClose);
  document.body.classList.remove('show-modal');
}
