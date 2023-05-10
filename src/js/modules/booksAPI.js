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

  async getBooks() {
    const url = this.#BASE_URL + this.#END_POINT;
    const res = await fetch(url);
    return res.json();
  }

  async createBook(book) {
    const url = this.#BASE_URL + this.#END_POINT;

    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(url, options);
    return res.json();
  }

  async resetBook({ id, ...book }) {
    const url = this.#BASE_URL + this.#END_POINT + `/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return res.json();
  }

  async updateBook({ id, ...book }) {
    const url = this.#BASE_URL + this.#END_POINT + `/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return res.json();
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

  async createBook(book) {
    const res = await axios.post('/books', book);
    return res.data;
  }

  async resetBook({ id, ...book }) {
    try {
      const glovo = await axios.put(`/bookssefse/${id}`, book);
      return glovo;
    } catch {
      console.log('Error request');
    }

    return;
  }

  async updateBook({ id, ...book }) {
    const res = await axios.patch(`/books/${id}`, book);
    return res.data;
  }

  deleteBook(id) {
    return axios.delete(`/books/${id}`);
  }
}

export const booksAPI = new BookAPIByAxios();
