let currentMoleHole;
let score = 0;
let timeUp = false;

window.onload = () => {
    setGame();
}

function setGame (){
    for (let i = 0; i < 9; i++){  // i va de 0 → 9, stop à 9
        // div id="0-8"
        let hole = document.createElement('div');
        hole.classList.add('hole')
        hole.id = i.toString();

        hole.addEventListener('click', selectHole)

        document.getElementById('game').appendChild(hole);
    }

    setInterval(setMole, 1500);
}

function getRandomHole (){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole (){
    if (currentMoleHole) {
        currentMoleHole.innerHTML = ''
    }

    let mole = document.createElement('img');
    mole.classList.add('mole')
    mole.src = './asset/img/Triopikeur.png'

    let num = getRandomHole()
    currentMoleHole = document.getElementById(num);
    currentMoleHole.appendChild(mole);
}

function selectHole (){
    if (this == currentMoleHole){
        score += 10;
        document.getElementById('score').innerText = score.toString();
    }
}