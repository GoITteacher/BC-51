let refs = {
  firstBoxElem: document.querySelector('.js-box-0'),
};

/* refs.firstBoxElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  let spanElem = e.target;

  if (e.target.nodeName !== 'SPAN') {
    spanElem = e.target.querySelector('span');
  }

  console.log(spanElem.textContent.trim());
}); */

refs.firstBoxElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const liElem = e.target.closest('li');
  const userId = liElem.dataset.id;
  console.log(userId);
});
