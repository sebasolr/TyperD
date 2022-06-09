window.addEventListener('load', init)
// variables inciales

let time = 10;
let score = 0;
let playing;

// elementos del DOM

const wordInput = document.querySelector('#text');
const currentWord = document.querySelector('#randomWord');
const ScoreDisplay = document.querySelector('#score');
const timeDisplay =document.querySelector('time-container');
const message = document.querySelector('#end-game-container');
const seconds = document.querySelector('#timeSpan');


const words = ['californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter','snow','dylan','zephyr','funky','chili'];

// funciones para comenzar el juego

function init(){
    // load word from array
    showWord(words);
}
// generar palabra random
function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    // salida de la palabra random
    currentWord.innerHTML=words[randIndex];
}


// funciones

// let word = words[Math.floor(Math.random()*words.length)];
// wordInput.innerHTML= 'word';