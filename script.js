window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');
  const btnClear = document.getElementById('clear-board');
  let lines = document.getElementsByClassName('line');
  fillBoard(lines);
  
  function fillBoard(lines) {
    for (indexLine = 0; indexLine < lines.length; indexLine += 1) {
      for (p = 1; p <= 5; p +=1) {
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
  
  btnClear.addEventListener('click', (Event) => {
    pixels.forEach(item => {
      item.style.background = 'white';
    })
  })
  
}
