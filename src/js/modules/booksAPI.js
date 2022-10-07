import axios from 'axios';
import { faker } from '@faker-js/faker';
faker.seed(0);
faker.locale = 'ru';
const baseURL = 'http://localhost:4040';

const axiosV2 = axios.create({
  baseURL: `${baseURL}/books`,
});

export class BooksAPI {
  constructor(page, limit) {
    this._page = page;
    this._limit = limit;
  }

  getBooks() {}

  getLimitBooks() {}

  createBook(book) {}

  replaceBook(book, id) {}

  updateBook(book, id) {}

  deleteBook(id) {}

  static getRandomBook() {
    return {
      author: faker.name.firstName(),
      desc: faker.lorem.paragraph(),
      title: faker.word.preposition(),
    };
  }
}
