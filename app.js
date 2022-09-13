import { getRandomItem, score } from './utils.js';

let fighters = ['rogue', 'paladin', 'sorcerer']; //rogue paladin sorcerer
let total = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let computer = '';
let pick = '';

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

// function getRandomItem(array) {
//     const random = Math.floor(Math.random() * array.length);
//     const item = array[random];
//     return item;
// }

// function score(pick, computer) {
//     if (pick === 'rogue' && computer === 'sorceror') {
//         return 1;
//     }
//     if (pick === 'sorceror' && computer === 'paladin') {
//         return 1;
//     }
//     if (pick === 'paladin' && computer === 'rogue') {
//         return 1;
//     }
//     if (pick === 'rogue' && computer === 'paladin') {
//         return -1;
//     }
//     if (pick === 'sorceror' && computer === 'rogue') {
//         return -1;
//     }
//     if (pick === 'paladin' && computer === 'sorceror') {
//         return -1;
//     }
//     return 0;
// }
