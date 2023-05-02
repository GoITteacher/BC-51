import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */

refs.notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

setTimeout(() => {
  timeoutId = setTimeout(hideNotification, 5000);
  showNotification();
}, NOTIFICATION_DELAY);

function showNotification() {
  console.log('Show');
  console.log(timeoutId);
  refs.notification.classList.add('is-visible');
}
function hideNotification() {
  console.log('Hide');
  refs.notification.classList.remove('is-visible');
}
