window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');

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

  let pixels = document.getElementsByClassName('pixel');
  const container = document.getElementById('pixel-board');

  for (i = 0; i < pixels.lenght; i += 1) {
    pixels[i].addEventListener('click', function (event) {
    console.log('hello World');
    })
  }


}
