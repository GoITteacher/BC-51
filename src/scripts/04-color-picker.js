let colorPalette = [];
const LENGTH = 12;
const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

createPaletteItems();
renderPalette(colorPalette);

// ======= LISTENERS ==========

refs.backdropElem.addEventListener('click', onBackdropClick);
refs.itemList.addEventListener('click', onColorClick);
refs.btnReloadColor.addEventListener('click', onColorReload);

// ===== CALLBACK =======

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) return;
  closeModal();
}
function onColorClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const color = e.target.style.backgroundColor;
  refs.modalElement.style.backgroundColor = color;
  showModal();
}
function onColorReload(e) {
  createPaletteItems();
  renderPalette(colorPalette);
}
function onModalClose(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// ======== HELPERS =========

function templatePalette(colorPalette) {
  return colorPalette
    .map(({ hex, rgb }) => {
      return `
      <li class="color-item">
          <button class="color-body" style="background-color:${hex};"></button>
          <div class="color-footer">
              <div>HEX: ${hex}</div>
              <div>RGB: ${rgb}</div>
          </div>
      </li>
    `;
    })
    .join('');
}
function renderPalette(colorPalette) {
  const markup = templatePalette(colorPalette);
  refs.itemList.innerHTML = '';
  refs.itemList.insertAdjacentHTML('beforeend', markup);
}
function showModal() {
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onModalClose);
}
function closeModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onModalClose);
}

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRandomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}
function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}
