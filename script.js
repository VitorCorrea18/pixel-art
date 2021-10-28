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
      pixel.addEventListener('click', (Event) => {
        let selectedElemt = document.querySelector('.selected');
        console.log(selectedElemt);
        Event.target.style.background = selectedElemt.id;
      })
      lines[indexLine].appendChild(pixel);
    }
  }
}

function createPixel() {
  let pixel = document.createElement("div");
  pixel.className = 'pixel';
  return pixel;
}

function selectBtn(btn) {
  let selectedElemt = document.querySelector('.selected');
  selectedElemt.classList.remove('selected');
  btn.classList.add('selected');
}

function clearColor() {
  const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(item => {
      item.style.background = 'white';
    })
}

function resizeBoard() {
    let inputValue = document.getElementById('board-size').value;
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
    inputValue.value = "";
}

window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');
  const btnClear = document.getElementById('clear-board');
  const btnVQM = document.getElementById('generate-board');
  fillBoard();
  btnBlack.classList.add('selected');

  btnBlue.addEventListener('click', (event) => { selectBtn(event.target); })

  btnGreen.addEventListener('click', (event) => { selectBtn(event.target); })

  btnRed.addEventListener('click', (event) => { selectBtn(event.target); })

  btnBlack.addEventListener('click', (event) => { selectBtn(event.target); })

  btnClear.addEventListener('click', () => { clearColor(); })

  btnVQM.addEventListener('click', () => { resizeBoard(); })
}
