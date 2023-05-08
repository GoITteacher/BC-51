import { NewsAPI } from './modules/newsApi';
const newsApi = new NewsAPI();
const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
};

let observer = new IntersectionObserver(onBtnLoadClick, {
  threshold: 1.0,
});

let target = document.querySelector('.js-target');
observer.observe(target);

refs.formElem.addEventListener('submit', onFormSubmit);

function onBtnLoadClick(entries, observer) {
  if (!newsApi.QUERY) return;
  entries.forEach(el => {
    if (el.isIntersecting) {
      newsApi.PAGE++;
      newsApi.getNews().then(data => {
        renderArticles(data.articles);
      });
    }
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  refs.articleListElem.innerHTML = '';

  newsApi.PAGE = 1;
  newsApi.QUERY = query;
  if (!newsApi.QUERY) return;

  newsApi.isActive = true;
  newsApi.getNews().then(data => {
    renderArticles(data.articles);
    newsApi.isActive = false;
  });
}

function markupArticles(articles) {
  return articles
    .map(el => {
      return `
    <li class="news-card card">
        <img class="img news-image" src="${el.urlToImage}" alt="#">
        <h3 class="card-title">${el.title}</h3>
        <p class="card-desc">${el.description}</p>
        <div class="card-footer">
        <span>${el.author}</span>
        <span>${el.publishedAt.split('T')[0]}</span>
        </div>
      </li>
    `;
    })
    .join('');
}

function renderArticles(articles) {
  const markup = markupArticles(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
