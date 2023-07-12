
import {getSuperHero} from './hero-api';
import {getQuotes} from './quotes';

const heroBoxElem = document.querySelector('.js-card-container')
const formEl = document.querySelector('.js-search-form')
formEl.addEventListener('submit', onSearchHero)

function onSearchHero (event) {
    event.preventDefault();
    const heroName = event.target.elements.query.value;
    getSuperHero(heroName).then(response => {
        renderHero (response);
    });
}

function renderHero (hero) {
    console.log(hero)
   
const markup = `<div class="card">
<div class="card-img-top">
  <img src="${hero.images.sm}" alt="{{name}}" style="width:160px;height:240px">
</div>
<div class="card-body">
  <h2 class="card-title">Имя:${hero.biography.fullName}</h2>

  <p class="card-text"><b>Умения</b></p>
  <ul class="list-group">
    <li class="list-group-item">{{ability.name}}</li>
  </ul>
</div>`;
heroBoxElem.innerHTML = markup;
}


const refs = {
    quotesFormEl: document.querySelector('.js-search-form1'),
    quotesBox: document.querySelector('.js-card-container1'),

}
refs.quotesFormEl.addEventListener('submit', onRandonQuotes)


function onRandonQuotes (event) {
    event.preventDefault();
    getQuotes().then(response => {
        renderQuotes (response)
    });
}

function renderQuotes (quote) {
    console.log(quote);
    const markup = `
    <div class="card">
    <div class="card-body">
    <p><q>${quote.content}</q> - <h3>${quote.originator.name}</h3></p>
  </div>
</div>
   `
   refs.quotesBox.innerHTML = markup;
}