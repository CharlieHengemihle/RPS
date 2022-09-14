import { getRandomItem, score } from './utils.js';

let fighters = ['rogue', 'paladin', 'sorcerer']; //rogue paladin sorcerer
let total = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let computer = '';
// let pick = '';
let gameState = 'results';

// let rogue = document.getElementById('Rogue');
// let paladin = document.getElementById('Paladin');
// let sorcerer = document.getElementById('Sorcerer');

const rogueButton = document.getElementById('rogue-button');
rogueButton.addEventListener('click', () => {
    handleFight('rogue');
});

const paladinButton = document.getElementById('pally-button');
paladinButton.addEventListener('click', () => {
    handleFight('paladin');
});

const sorcererButton = document.getElementById('sorc-button');
sorcererButton.addEventListener('click', () => {
    handleFight('sorcerer');
});

const againButton = document.getElementById('AgainButton');
againButton.addEventListener('click', () => {
    gameState = 'home';
    if (gameState === 'home') {
        rogueButton.classList.remove('hidden');
        paladinButton.classList.remove('hidden');
        sorcererButton.classList.remove('hidden');
        againButton.classList.add('hidden');
    }
});

function handleFight(pick) {
    computer = getRandomItem(fighters);
    const result = score(pick, computer);

    if (result === 1) {
        wins++;
    }
    if (result === 0) {
        draws++;
    }
    if (result === -1) {
        losses++;
    }
    total++;
    displayScoreboard();
    gameState = 'results';
    if (gameState === 'results') {
        rogueButton.classList.add('hidden');
        paladinButton.classList.add('hidden');
        sorcererButton.classList.add('hidden');
        againButton.classList.remove('hidden');
    }
}

if (gameState === 'home') {
    rogueButton.classList.remove('hidden');
    paladinButton.classList.remove('hidden');
    sorcererButton.classList.remove('hidden');
    againButton.classList.add('hidden');
}

const totalDisplay = document.getElementById('total-display');

const winsDisplay = document.getElementById('wins-display');

const drawsDisplay = document.getElementById('draws-display');

const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
}
