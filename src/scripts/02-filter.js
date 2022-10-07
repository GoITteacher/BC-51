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
showArr(list);

const debouncedOnInputChange = _.debounce(onInputChange, 300);

filterElem.addEventListener('input', debouncedOnInputChange);

function onInputChange(e) {
  const filterValue = e.target.value.toLowerCase();
  const filteredArr = list.filter(value => {
    return value.label.toLowerCase().includes(filterValue);
  });
  showArr(filteredArr);
}

function showArr(arr) {
  listElem.innerHTML = arr
    .map(item => {
      return `<li>${item.label}</li>`;
    })
    .join('');
}
