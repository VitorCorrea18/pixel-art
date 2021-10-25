window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');

  btnBlack.classList.add('selected');
  
  btnBlue.addEventListener('click', function(event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })
  
  btnGreen.addEventListener('click', function(event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  btnRed.addEventListener('click', function(event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  btnBlack.addEventListener('click', function(event) {
    let selectedElemt = document.querySelector('.selected');
    selectedElemt.classList.remove('selected');
    event.target.classList.add('selected');
  })

  const btnPixel = document.querySelector('.pixel');

  btnPixel.addEventListener('click', function(event) {
    let selectedElemt = document.querySelector('.selected');
    console.log('clikado');
  })



}
