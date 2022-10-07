import '../css/common.css';
import '../css/book.css';
import { BooksAPI } from './modules/booksAPI';
import cardBooks from '../templates/card-books.hbs';
function callback() {
  console.log('CALLBACK');
}

const booksApi = new BooksAPI(0, 5);

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

refs.btnLoadMore.addEventListener('click', async () => {});
// refs.createForm.addEventListener('submit', onCreateForm);
// refs.resetForm.addEventListener('submit', onResetForm);
// refs.updateForm.addEventListener('submit', onUpdateForm);
// refs.deleteForm.addEventListener('submit', onDeleteForm);

function renderBooks(books) {
  refs.bookList.innerHTML = cardBooks(books);
}
