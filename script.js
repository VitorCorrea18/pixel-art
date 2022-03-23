const btnBlack = document.getElementById('black');
const btnClear = document.getElementById('clear-board');
const btnVQV = document.getElementById('generate-board');

function generateColor() {
  // Esta funnção eu tive como referência um código do site CSS Tricks
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor !== '000000') {
    return `#${randomColor}`;
  } generateColor();
}

function resetBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const lines = document.querySelectorAll('.line');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
  for (let i = 0; i < lines.length; i += 1) {
    lines[i].remove();
  }
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

function fillBoard() {
  const lines = document.getElementsByClassName('line');
  for (let indexLine = 0; indexLine < lines.length; indexLine += 1) {
    for (let p = 1; p <= lines.length; p += 1) {
      const pixel = createPixel();
      pixel.className = 'pixel';
      pixel.style.background = 'white';
      pixel.addEventListener('click', (Event) => {
        const Click = Event;
        const selectedElemt = document.querySelector('.selected');
        Click.target.style.background = selectedElemt.style.background;
      });
      lines[indexLine].appendChild(pixel);
    }
  }
}

function selectBtn(btn) {
  const selectedElemt = document.querySelector('.selected');
  selectedElemt.classList.remove('selected');
  btn.classList.add('selected');
}

function clearColor() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => {
    const p = item;
    p.style.background = 'white';
  });
}

const createColorBtn = (number) => {
  const btnNewColor= document.createElement('div');
  btnNewColor.className = 'color';
  document.querySelector('#color-palette').appendChild(btnNewColor);
  btnNewColor.style.background= generateColor();
  btnNewColor.addEventListener('click', (event) => { selectBtn(event.target)});
};

const checkBoardSize = () => {
  const lines = document.querySelectorAll('.line');
  const colorBtns = document.querySelectorAll('.color');
  if (lines.length >= 15 && colorBtns.length < 5) { createColorBtn(); createColorBtn() }
  if (lines.length < 15 && colorBtns.length > 5) {
    const numberOfBtns = colorBtns.length;
    colorBtns[numberOfBtns - 1].remove();
    colorBtns[numberOfBtns - 2].remove();
  }
};

const saveBoardSize = () => {
  const lines = document.querySelectorAll('.line');
  localStorage.setItem('boardSize', lines.length);
};

function resizeBoard() {
  const colorBtns = document.querySelectorAll('.color');
  let inputValue = document.getElementById('board-size').value;
  if (inputValue < 5 && inputValue !== 0) { inputValue = 5; }
  if (inputValue > 50) { inputValue = 50; }
  resetBoard();
  for (let i = 0; i < inputValue; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'line';
    document.getElementById('pixel-board').appendChild(newLine);
  }
  fillBoard();
  document.getElementById('board-size').value = inputValue;
  checkBoardSize();
  setColorBtnsClickListeners(colorBtns);
  saveBoardSize();
  btnBlack.classList.add('selected');
  btnBlack.style.background = 'black';
}

const setColorBtnsClickListeners = (colorBtns) => {
  colorBtns.forEach((btn) => {
    btn.style.background = generateColor();
    btn.addEventListener('click', (event) => { selectBtn(event.target)});
  })
};

const recoverBoardSize = () => {
  const stringLines = localStorage.getItem('boardSize');
  let numberLines = Number(stringLines);
  if (!stringLines) numberLines = 10;
  for (let i = 1; i <= numberLines; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'line';
    document.getElementById('pixel-board').appendChild(newLine);
  }
};

const resetColorsBtnClickListener = () => {
  const btnResetColors = document.getElementById('reset-color');
  btnResetColors.addEventListener('click', () => {
    window.location.reload();
  })
};

window.onload = () => {
  resetColorsBtnClickListener();
  recoverBoardSize();
  fillBoard();
  checkBoardSize();
  const colorBtns = document.querySelectorAll('.color');
  setColorBtnsClickListeners(colorBtns);
  btnBlack.classList.add('selected');
  btnBlack.style.background = 'black';
  btnClear.addEventListener('click', () => { clearColor(); });
  btnVQV.addEventListener('click', () => {
    if (document.getElementById('board-size').value.length === 0) { 
      alert('Invalid Board Size!'); 
    } else resizeBoard();
  });
};
