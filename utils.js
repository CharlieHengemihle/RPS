export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(fighters) {
    const random = getRandomNumber(fighters.length);
    const item = fighters[random];
    return item;
}

let fighters = ['rogue', 'paladin', 'sorcerer'];

export function score(pick, computer) {
    if (pick === 'rogue' && computer === 'sorceror') {
        return 1;
    }
    if (pick === 'sorceror' && computer === 'paladin') {
        return 1;
    }
    if (pick === 'paladin' && computer === 'rogue') {
        return 1;
    }
    if (pick === 'rogue' && computer === 'paladin') {
        return -1;
    }
    if (pick === 'sorceror' && computer === 'rogue') {
        return -1;
    }
    if (pick === 'paladin' && computer === 'sorceror') {
        return -1;
    }
    return 0;
}
