window.onload = function () {
  const btnBlack = document.getElementById('black');
  const btnBlue = document.getElementById('blue');
  const btnGreen = document.getElementById('green');
  const btnRed = document.getElementById('red');
  let pixels = document.querySelectorAll('.pixel');
  const btnClear = document.getElementById('clear-board');
  
  pixels.forEach(item => {
    item.style.background = 'white';
  })
  
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

  
  pixels.forEach(item => {
    item.addEventListener('click', (Event) => {
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
