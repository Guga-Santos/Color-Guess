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
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
  }
});

const resetar = document.querySelector('#reset-game');

resetar.addEventListener('click', () => {
  window.location.reload();
});
