import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    test: 'Hello',
  },
});

class BookAPI {
  #BASE_URL = 'http://localhost:5000';
  #END_POINT = '/books';

  getBooks() {
    const url = this.#BASE_URL + this.#END_POINT;
    return fetch(url).then(res => res.json());
  }

  createBook(book) {
    const url = this.#BASE_URL + this.#END_POINT;

    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(url, options).then(res => res.json());
  }

  resetBook({ id, ...book }) {
    const url = this.#BASE_URL + this.#END_POINT + `/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options).then(res => res.json());
  }

  updateBook({ id, ...book }) {
    const url = this.#BASE_URL + this.#END_POINT + `/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = this.#BASE_URL + this.#END_POINT + `/${id}`;
    const options = {
      method: 'DELETE',
    };

    return fetch(url, options);
  }
}

class BookAPIByAxios {
  getBooks() {
    return axios.get('/books');
  }

  getPopularBooks() {
    return axios.get('/books', {});
  }

  createBook(book) {
    return axios.post('/books', book).then(res => res.data);
  }

  resetBook({ id, ...book }) {
    return axios.put(`/books/${id}`, book).then(res => res.data);
  }

  updateBook({ id, ...book }) {
    return axios.patch(`/books/${id}`, book).then(res => res.data);
  }

  deleteBook(id) {
    return axios.delete(`/books/${id}`);
  }
}

export const booksAPI = new BookAPIByAxios();
