const sectionSelectAttack = document.getElementById('select-attack')
const btnBlockPlayer = document.getElementById('btn-block-select')
const btnRestart = document.getElementById('btn-restart')
const sectionSelectBlock = document.getElementById('select-block')
const inputWhite = document.getElementById('white')
const inputGray = document.getElementById('gray')
const inputBlack = document.getElementById('black')
const spanBlockPlayer = document.getElementById('player-block')
const spanBlockEnemy = document.getElementById('enemy-block')
const spanLifePlayer = document.getElementById('lifePlayer')
const spanLifeEnemy = document.getElementById('lifeEnemy')
const attackForPlayer = document.getElementById('attack-player')
const attackForEnemy = document.getElementById('attack-enemy')
const sectionMessage = document.getElementById('result')
const btnFire = document.getElementById('btn-fire')
const btnWater = document.getElementById('btn-water')
const btnEarth = document.getElementById('btn-earth')
const sectionRestart = document.getElementById('restart')

let attackPlayer
let attackEnemy
let lifePlayer = 3
let lifeEnemy = 3

function startGame(){
    sectionSelectAttack.style.display = 'none'
    sectionRestart.style.display = 'none'
    btnBlockPlayer.addEventListener('click', selectBlockPlayer)
    btnFire.addEventListener('click', attackFire)
    btnWater.addEventListener('click', attackWater)
    btnEarth.addEventListener('click', attackEarth)
    btnRestart.addEventListener('click', restartGame)
}
function selectBlockPlayer(){
    sectionSelectBlock.style.display = 'none'
    sectionSelectAttack.style.display = 'flex'
    if(inputWhite.checked){
        spanBlockPlayer.innerHTML = 'WHITE'
    } else if(inputGray.checked){
        spanBlockPlayer.innerHTML = 'GRAY'
    } else if(inputBlack.checked){
        spanBlockPlayer.innerHTML = 'BLACK'
    } else{
        alert("SELECT A CUBE FIRST")
        restartGame()
    }
    selectBlockEnemy()
}
function selectBlockEnemy(){
    let randomBlock = random(1,3)
    if(randomBlock == 1){
        spanBlockEnemy.innerHTML = 'WHITE'
    } else if(randomBlock == 2){
        spanBlockEnemy.innerHTML = 'GRAY'
    } else{
        spanBlockEnemy.innerHTML = 'BLACK'
    }
}
function attackFire(){
    attackPlayer = 'FIRE'
    attackRandomEnemy()
}
function attackWater(){
    attackPlayer = 'WATER'
    attackRandomEnemy()
}
function attackEarth(){
    attackPlayer = 'EARTH'
    attackRandomEnemy()
}
function attackRandomEnemy(){
    let attackRandom = random(1,3)
    if (attackRandom == 1){
        attackEnemy = 'FIRE'
    } else if(attackRandom == 2){
        attackEnemy = 'WATER'
    } else{
        attackEnemy = 'EARTH'
    }
    combat()
}
function combat(){
    if (attackEnemy == attackPlayer) {
        createMessage('TIE')
        } else if ((attackPlayer == 'FIRE' && attackEnemy == 'FIRE') || 
                   (attackPlayer == 'WATER' && attackEnemy == 'FIRE') || 
                   (attackPlayer == 'EARTH' && attackEnemy == 'WATER')) {
        createMessage('WIN')
        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy
        } else {
        createMessage('LOSS')
        lifePlayer--
        spanLifePlayer.innerHTML = lifePlayer
    }
    ckeckLife()
}
function ckeckLife(){
    if (lifeEnemy == 0){
        createFinalMessage('WINNERRRRR')
    } else if(lifePlayer == 0){
        createFinalMessage('LOOSERRRRR')
    }
}
function createMessage(result){
    let newAttackPlayer = document.createElement('p')
    let newAttackEnemy = document.createElement('p')
    sectionMessage.innerHTML = result
    newAttackPlayer.innerHTML = attackPlayer
    newAttackEnemy.innerHTML = attackEnemy
    attackForPlayer.appendChild(newAttackPlayer)
    attackForEnemy.appendChild(newAttackEnemy)
}
function createFinalMessage(resultFinal){
    sectionMessage.innerHTML = resultFinal
    btnFire.disabled = true
    btnWater.disabled = true
    btnEarth.disabled = true
    sectionRestart.style.display = 'block'
}
function restartGame(){
    location.reload()
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', startGame)