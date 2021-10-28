const btnBlack = document.getElementById('black');
const btnBlue = document.getElementById('blue');
const btnGreen = document.getElementById('green');
const btnRed = document.getElementById('red');
const btnClear = document.getElementById('clear-board');
const btnVQV = document.getElementById('generate-board');

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
        const selectedElemt = document.querySelector('.selected');
        Event.target.style.background = selectedElemt.id;
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
  if (inputValue.length === 0) { alert('Board inválido!'); }
  if (inputValue < 5 && inputValue !== 0) { inputValue = 5; }
  if (inputValue > 50) { inputValue = 50; }
  resetBoard();
  for (i = 0; i < inputValue; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'line';
    document.getElementById('pixel-board').appendChild(newLine);
  }
  fillBoard();
}

window.onload = () => {
  fillBoard();

  btnBlack.classList.add('selected');

  btnBlue.addEventListener('click', (event) => { selectBtn(event.target); });

  btnGreen.addEventListener('click', (event) => { selectBtn(event.target); });

  btnRed.addEventListener('click', (event) => { selectBtn(event.target); });

  btnBlack.addEventListener('click', (event) => { selectBtn(event.target); });

  btnClear.addEventListener('click', () => { clearColor(); });

  btnVQV.addEventListener('click', () => { resizeBoard(); });
};
