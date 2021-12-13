const ballColors = document.getElementsByClassName('ball');

function geraCores() {
  let cores = '(';
  for (let i = 1; i <= 3; i += 1) {
    if (i < 3) {
      cores += `${Math.floor(Math.random() * 255)},`;
    } else {
      cores += `${Math.floor(Math.random() * 255)})`;
    }
  }
  return cores;
}

function distribuiCores() {
  for (let i = 0; i < ballColors.length; i += 1) {
    ballColors[i].style.backgroundColor = `rgb${geraCores()}`;
  }
  const itemAleatorio = Math.floor(Math.random() * 6);
  document.querySelector('#rgb-color').innerText = ballColors[itemAleatorio].style.backgroundColor;
}

window.onload = distribuiCores();

const linhaDeBolas = document.querySelector('#linha-de-bolas');
const acerto = document.querySelector('#rgb-color').innerText;

linhaDeBolas.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === acerto) {
    document.querySelector('#answer').innerText = 'Acertou!';
    document.querySelector('#score').innerText = parseInt(document.querySelector('#score').innerText) + 3
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    document.querySelector('#score').innerText = '0'
  }

});

function guardarPLacar() {
  const placar = document.querySelector('#score').innerText;
  localStorage.setItem('placar', placar);
}
const resetar = document.querySelector('#reset-game');
resetar.addEventListener('click', () => {
  guardarPLacar()
  window.location.reload();
});

const placarSalvo = localStorage.getItem('placar');
if(placarSalvo) {
  const placarNew = document.querySelector('#score');
  placarNew.innerText = placarSalvo
}






