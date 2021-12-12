const ballColors = document.getElementsByClassName('ball');

function geraCores() {
    let cores = 'rgb('
    for(let i = 1; i <= 3; i += 1) {
        if(i < 3) {
        cores += Math.floor(Math.random() * 255) + ','
    } else {
        cores += Math.floor(Math.random() * 255) + ')'
    }
    }
    return cores
}

function distribuiCores() {
for (let i = 0; i < ballColors.length; i += 1) {
    ballColors[i].style.backgroundColor = geraCores()
}
}

window.onload = distribuiCores()
