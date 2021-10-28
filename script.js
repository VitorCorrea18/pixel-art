const btnBlack = document.getElementById('black');
const btnColor1 = document.getElementById('color1');
const btnColor2 = document.getElementById('color2');
const btnColor3 = document.getElementById('color3');
const btnClear = document.getElementById('clear-board');
const btnVQV = document.getElementById('generate-board');

function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
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

function resizeBoard() {
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
}

window.onload = () => {
  fillBoard();
  btnBlack.classList.add('selected');
  btnBlack.style.background = 'black';
  btnColor1.style.background = generateColor();
  btnColor2.style.background = generateColor();
  btnColor3.style.background = generateColor();
  btnColor1.addEventListener('click', (event) => { selectBtn(event.target); });
  btnColor2.addEventListener('click', (event) => { selectBtn(event.target); });
  btnColor3.addEventListener('click', (event) => { selectBtn(event.target); });
  btnBlack.addEventListener('click', (event) => { selectBtn(event.target); });
  btnClear.addEventListener('click', () => { clearColor(); });
  btnVQV.addEventListener('click', () => {
    if (document.getElementById('board-size').value.length === 0) { alert('Board inválido!'); }
    resizeBoard();
  });
};
