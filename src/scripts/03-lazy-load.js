const refs = {
  btnLoad: document.querySelector('.js-btn'),
  listElem: document.querySelector('.js-image-list'),
};

refs.btnLoad.addEventListener('click', () => {
  const markup = templateList(1000);
  renderImages(markup);
});

function templateList(len) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    const elem = `
    <li>
    <img class="lazyload blur-up" src="./lqip-src.jpg" data-src="https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg" alt="eat"><br>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus accusantium optio ex facilis quae aut quam dolorem, distinctio sequi. Qui fugit, illum enim quo vero ab ipsum provident possimus?</p>
    </li>`;
    arr.push(elem);
  }

  return arr.join('');
}

function renderImages(markup) {
  refs.listElem.insertAdjacentHTML('beforeend', markup);
}

/* 

*/
