
window.onload = () => {
    setGame();
}

function setGame (){
    for (let i = 0; i < 9; i++){ // i va de 0 → 9, stop à 9

        // div id="0-8"
        let hole = document.createElement('div');
        hole.classList.add('hole')
        hole.id = i.toString();
        document.getElementById('game').appendChild(hole);
    }
}

function getRandomHole (){
    let num = Math.floor(Math.random() * 9)
}

function setMole (){
    let mole = document.createElement('img');
    mole.src = './asset/img/Triopikeur.png'

    let num = getRandomHole()
}