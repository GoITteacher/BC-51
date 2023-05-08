export class NewsAPI {
  #BASE_URL = 'https://newsapi.org/v2';
  #API_KEY = 'c8747511a2c34730a83caaff4f3693e7';
  #PAGE_SIZE = 5;
  PAGE = 1;
  QUERY = '';
  TOTAL_PAGES = 1;
  isActive = false;

  getNews() {
    const url = this.#BASE_URL + '/everything';
    const params = new URLSearchParams({
      q: this.QUERY,
      apiKey: this.#API_KEY,
      pageSize: this.#PAGE_SIZE,
      page: this.PAGE,
    });
    return fetch(`${url}?${params}`)
      .then(res => res.json())
      .then(data => {
        this.TOTAL_PAGES = Math.ceil(data.totalResults / this.#PAGE_SIZE);
        console.log(this.TOTAL_PAGES);
        return data;
      });
  }
}
