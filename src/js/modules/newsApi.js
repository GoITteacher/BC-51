import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://free-news.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  },
});

const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const options = {};

// Make a request for a user with a given ID

export class NewsApi {
  currentPage = 1;
  query;

  getNews(query) {
    if (query) {
      this.query = query;
    }

    const END_POINT = '/search';
    const params = {
      q: this.query,
      page: this.currentPage,
    };

    const queryParams = new URLSearchParams(params);

    return fetch(`${BASE_URL}${END_POINT}?${queryParams}`, options).then(
      response => response.json(),
    );
  }

  getNewsByAxios(query) {
    if (query) {
      this.query = query;
    }

    const END_POINT = '/search';
    const config = {
      params: {
        q: this.query,
        page: this.currentPage,
      },
    };

    return instance.get(END_POINT, config).then(response => response.data);
  }
}
