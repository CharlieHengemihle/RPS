export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

let rogue = document.getElementById('Rogue');
let paladin = document.getElementById('Paladin');
let sorcerer = document.getElementById('Sorcerer');

export function score(pick, computer) {
    if (pick === 'rogue' && computer === 'sorcerer') {
        return 1;
        paladin.classList.add('hidden');
    }
    if (pick === 'sorcerer' && computer === 'paladin') {
        return 1;
        // rogue.classList.add('hidden');
    }
    if (pick === 'paladin' && computer === 'rogue') {
        return 1;
        // sorcerer.classList.add('hidden');
    }
    if (pick === 'rogue' && computer === 'paladin') {
        return -1;
        // sorcerer.classList.add('hidden');
    }
    if (pick === 'sorcerer' && computer === 'rogue') {
        return -1;
        // paladin.classList.add('hidden');
    }
    if (pick === 'paladin' && computer === 'sorcerer') {
        return -1;
        // rogue.classList.add('hidden');
    } else {
        return 0;
    }
}
