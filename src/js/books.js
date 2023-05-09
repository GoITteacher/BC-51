import '../css/common.css';
import { booksAPI } from './modules/booksAPI';

const refs = {
  bookListElem: document.querySelector('.js-article-list'),
  createFormElem: document.querySelector('.js-create-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
};

function onLoad() {
  booksAPI.getPopularBooks().then(response => {
    renderBooks(response.data);
  });
}
onLoad();

function bookMarkup(book) {
  return `
  <li data-id="${book.id}" class="card articles book-card">
  <h2>${book.title}</h2>
  <p>${book.desc}</p>
  ${book.author}
</li>`;
}

function booksMarkup(books) {
  return books.map(bookMarkup).join('');
}

function renderBooks(books) {
  const markup = booksMarkup(books);
  refs.bookListElem.innerHTML = markup;
}
// ================================

refs.createFormElem.addEventListener('submit', onCreateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);

function onCreateBook(e) {
  e.preventDefault();
  const { bookTitle, bookAuthor, bookDesc } = e.target.elements;

  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    desc: bookDesc.value,
  };

  booksAPI.createBook(book).then(newBook => {
    const markup = bookMarkup(newBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
}

function onResetBook(e) {
  e.preventDefault();
  const book = {};

  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  booksAPI.resetBook(book).then(newBook => {
    const oldBookElem = document.querySelector(`[data-id="${book.id}"]`);
    const markup = bookMarkup(newBook);
    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}

function onUpdateBook(e) {
  e.preventDefault();
  const book = {};

  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    if (value) {
      book[key] = value;
    }
  });

  booksAPI.updateBook(book).then(newBook => {
    const oldBookElem = document.querySelector(`[data-id="${book.id}"]`);
    const markup = bookMarkup(newBook);
    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}

function onDeleteBook(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;

  booksAPI.deleteBook(id).then(() => {
    const oldBookElem = document.querySelector(`[data-id="${id}"]`);
    oldBookElem.remove();
  });

  e.target.reset();
}
