import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);
openModal();
function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
