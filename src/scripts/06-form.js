const formElem = document.querySelector('.js-form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget);
  copyFun(e);
});

function onFormSubmit(e) {
  const userName = e.target.elements.username.value;
  console.log(userName, e.currentTarget);
}

const copyFun = _.throttle(onFormSubmit, 2000);
