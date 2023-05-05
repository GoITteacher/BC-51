import '../css/common.css';
import { refs } from './modules/refs.js';

import { searchHero } from './modules/hero';
import { getQuotes } from './modules/quotesAPI';
import { getHero } from './modules/heroesAPI';
import { getPrice } from './modules/binanceAPI';

import quotesTemplate from '../templates/quotes-card';
import heroesTemplate from '../templates/hero-card';

// =======================================================
refs.form.addEventListener('submit', onSubmitHandler);
function onSubmitHandler(e) {
  e.preventDefault();

  let dataPromise = getQuotes();
  dataPromise.then(value => {
    refs.cardContainer.innerHTML = quotesTemplate(value);
  });
}
// =======================================================
refs.form1.addEventListener('submit', onSearchHero);
function onSearchHero(e) {
  e.preventDefault();

  const heroName = refs.form1.elements.query.value;
  getHero(heroName)
    .then(resolve => resolve.json())
    .then(hero => {
      // console.log(heroesTemplate(hero));
      refs.cardContainer1.innerHTML = heroesTemplate(hero);
    });
}
// =======================================================
refs.form2.addEventListener('submit', e => {
  e.preventDefault();
  const symbol = e.target.elements.query.value;
  getPrice(symbol).then(data => {
    renderCrypto(data);
  });
});

function renderCrypto(data) {
  const markup = `
      <span>Symbol: ${data.symbol}</span><br>
      <span>Price: ${data.price}</span>
  `;
  refs.cardContainer2.innerHTML = markup;
}
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================

refs.form3.addEventListener('submit', e => {
  e.preventDefault();
  const hero = e.target.elements.query.value;
  searchHero(hero).then(objHero => {
    renderHero(objHero);
  });
});

function renderHero(hero) {
  console.log(hero);
  const markup = `
    <div class="card">
        <div class="card-img-top">
          <img src="${hero.images.lg}" alt="" style="width:160px;height:240px">
        </div>
        <div class="card-body">
          <h2 class="card-title">Имя: ${hero.biography.fullName}</h2>
        </div>
      </div>
  `;

  refs.cardContainer3.innerHTML = markup;
}
