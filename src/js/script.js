const refs = {
  formElem: document.querySelector('.js-form'),
  listElem: document.querySelector('.js-list'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const postId = e.target.elements.postId.value;
  getCommentsByPostId(postId).then(comments => {
    render(comments);
  });
});

function getCommentsByPostId(postId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/comments';
  const PARAMS = `?postId=${postId}`;
  const url = BASE_URL + END_POINT + PARAMS;
  return fetch(url).then(res => res.json());
}

function render(comments) {
  const markup = comments
    .map(el => {
      return `<li class="box">
    <h3>${el.name}</h3>
    <span>${el.email}</span>
    <p>${el.body}</p>
</li>`;
    })
    .join();

  refs.listElem.innerHTML = markup;
}
