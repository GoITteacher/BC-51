let colorPalette = [];
const LENGTH = 5;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
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

createPaletteItems();
////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

function loadColorPallet() {
  let pallete = '';

  pallete = colorPalette
    .map(value => {
      return `
    <li class="color-item">
    <div class="color-footer">
        <div>HEX: ${value.hex}</div>
        <div>RGB: ${value.rgb}</div>
        <div>
        <button class="color-body" style="background-color:${value.hex};"></button> 
        </div>
    </div>
    <button class="color-body" style="background-color:${value.hex};"></button>
  </li>
    `;
    })
    .join('');

  refs.itemList.innerHTML = pallete;
}
loadColorPallet();

('div > li');
refs.itemList.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    let targetBtn = e.target.closest('li').querySelector(':scope > button');
    let color = targetBtn.style.backgroundColor;
    refs.modalElement.style.backgroundColor = color;
    document.body.classList.add('show-modal');
  }
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    document.body.classList.remove('show-modal');
  }
});
refs.btnReloadColor.addEventListener('click', call);
function call() {
  console.log('tesst');
  createPaletteItems();
  loadColorPallet();
}

////////////////////////////////////////////////////////////////////////////

/* 
nodeName
<li class="color-item">
    <button class="color-body style="background-color:...;"></button>
    <div class="color-footer">
        <div>HEX: ....</div>
        <div>RGB: ....</div>
        <div></div>
    </div>
</li>

*/
