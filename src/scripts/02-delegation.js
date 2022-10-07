let refs = {
  firstBoxElem: document.querySelector('.js-box'),
};

refs.firstBoxElem.addEventListener('click', e => {
  const targetElem = e.target.closest('button');

  if (targetElem) {
    console.log(
      targetElem.textContent,
      targetElem.closest('[data-group]').dataset.group,
    );
  }
});
