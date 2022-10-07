import { NewsApi } from './modules/newsApi';
const form = document.querySelector('.js-search-form');
const btnLoad = document.querySelector('.js-btn-load');
const articleListElem = document.querySelector('.js-article-list');

let newsApi1 = new NewsApi();

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();

  if (query) {
    newsApi1.currentPage = 1;

    newsApi1.getNewsByAxios(query).then(data => {
      clearElement(articleListElem);
      renderArticles(data.articles);
      btnLoad.disabled = false;

      if (newsApi1.currentPage >= data.total_pages) {
        btnLoad.disabled = true;
      }
      e.target.reset();
    });
  } else {
    console.log('Empty query');
  }
});

btnLoad.addEventListener('click', e => {
  newsApi1.currentPage++;
  newsApi1.getNews().then(data => {
    renderArticles(data.articles);

    if (newsApi1.currentPage >= data.total_pages) {
      btnLoad.disabled = true;
    }
  });
});

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderArticles(articles) {
  const markup = articles
    .map((article, index, array) => {
      return `
    <li>
    <h3>${article.title}</h3>
    <p>${article.summary}</p>
    <p>${article.author}</p>
    </li>
    `;
    })
    .join('');

  articleListElem.insertAdjacentHTML('beforeend', markup);
}
