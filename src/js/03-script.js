import { NewsAPI } from './modules/newsApi';
const newsApi = new NewsAPI();

newsApi.QUERY = 'ELON MUSK';

const observer = new IntersectionObserver(callback);
const target = document.querySelector('.js-target');
function callback() {
  console.log('Get News');
  newsApi.getNews().then(data => {
    console.log(data);
  });
}

observer.observe(target);
