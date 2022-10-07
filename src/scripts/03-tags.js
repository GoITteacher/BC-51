let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};
let tagsList = [];

refs.firstTagsList.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    const target = e.target.closest('li');
    const oldActiveLiElem = refs.firstTagsList.querySelector('.active');
    if (oldActiveLiElem) {
      oldActiveLiElem.classList.remove('active');
    }
    target.classList.add('active');
  }
});

refs.firstTagsList.addEventListener('focusin', e => {
  const oldActiveLiElem = refs.firstTagsList.querySelector('.active');
  if (oldActiveLiElem) {
    oldActiveLiElem.classList.remove('active');
  }
  e.target.closest('li').classList.add('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    tagsList = [];
    const target = e.target.closest('li');
    target.classList.toggle('active');
    const activeList = refs.secondTagsList.querySelectorAll(':scope > .active');
    activeList.forEach(value => {
      tagsList.push(value.children[0].dataset.value);
    });
  }
});

const sendData = () => {
  console.log(tagsList);
};

document.getElementById();
document.getElementsByClassName;
