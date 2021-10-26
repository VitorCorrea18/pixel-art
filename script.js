window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');
  const btnClear = document.getElementById('clear-board');
  fillBoard();
  btnBlack.classList.add('selected');

  btnBlue.addEventListener('click', function (event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  btnGreen.addEventListener('click', function (event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  btnRed.addEventListener('click', function (event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  btnBlack.addEventListener('click', function (event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  let pixels = document.querySelectorAll('.pixel');

  pixels.forEach(item => {
    item.addEventListener('click', (Event) => {
      console.log('click');
      let selectedElemt = document.querySelector('.selected');
      console.log(selectedElemt);
      Event.target.style.background = selectedElemt.id;
    })
  })

  btnClear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(item => {
      item.style.background = 'white';
    })
  })

  const btnVQM = document.getElementById('generate-board');
  const inputBoardSize = document.getElementById('board-size');

  btnVQM.addEventListener('click', () => {
    let inputValue = inputBoardSize.value;
    if (inputValue.length === 0) {alert('Board inválido!')}
    if (inputValue < 5 && inputValue !== 0) {inputValue = 5}
    if (inputValue > 50) {inputValue = 50}
  
      resetBoard();

      for (i = 0; i < inputValue; i += 1) {
        let newLine = document.createElement('div');
        newLine.className = 'line';
        document.getElementById('pixel-board').appendChild(newLine);
      }
      fillBoard();

      let pixels = document.querySelectorAll('.pixel');
      pixels.forEach(item => {
        item.addEventListener('click', (Event) => {
          console.log('click');
          let selectedElemt = document.querySelector('.selected');
          console.log(selectedElemt);
          Event.target.style.background = selectedElemt.id;
        })
      })
    inputValue.length = 0;
  })
}

const btnBlack = document.getElementById('black');
const btnBlue = document.getElementById('blue');
const btnGreen = document.getElementById('green');
const btnRed = document.getElementById('red');
const btnClear = document.getElementById('clear-board');


function resetBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const lines = document.querySelectorAll('.line');

  for (i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
  for (i = 0; i < lines.length; i += 1) {
    lines[i].remove();
  }
}

function fillBoard() {
  const lines = document.getElementsByClassName('line');
  for (indexLine = 0; indexLine < lines.length; indexLine += 1) {
    for (p = 1; p <= lines.length; p += 1) {
      let pixel = createPixel();
      pixel.className = 'pixel';
      pixel.style.background = 'white';
      lines[indexLine].appendChild(pixel);
    }
  }
}

function createPixel() {
  let pixel = document.createElement("div");
  pixel.className = 'pixel';
  return pixel;
}