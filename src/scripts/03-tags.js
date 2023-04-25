let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const liElem = e.target.closest('.tag-item');

  liElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('.tag-item');

  previousActiveElem = refs.secondTagsList.querySelector('.active');
  // previousActiveElem?.classList.remove('active');

  if (previousActiveElem) {
    previousActiveElem.classList.remove('active');
  }

  liElem.classList.add('active');
});

function sendData() {
  const liItems1 = refs.firstTagsList.querySelectorAll('li.active');
  let itemList = Array.from(liItems1);
  itemList = itemList.map(el => el.textContent.trim());
  console.log(itemList);

  // ===============

  const liItem2 = refs.secondTagsList.querySelector('.active');
  console.log(liItem2.textContent.trim());
}
