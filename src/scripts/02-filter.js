let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
  { label: 'Vanil' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');

filterElem.addEventListener('input', _.debounce(onListFilter, 300));

function onListFilter(e) {
  const value = e.target.value;
  const filteredList = list.filter(elem =>
    elem.label.toLowerCase().includes(value),
  );
  renderList(filteredList);
}

function renderList(arr) {
  const markup = arr.map(el => `<li>${el.label}</li>`).join('');

  listElem.innerHTML = markup;
}
