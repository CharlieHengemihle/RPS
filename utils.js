export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

export function score(pick, computer) {
    if (pick === 'rogue' && computer === 'sorcerer') {
        return 1;
    }
    if (pick === 'sorcerer' && computer === 'paladin') {
        return 1;
    }
    if (pick === 'paladin' && computer === 'rogue') {
        return 1;
    }
    if (pick === 'rogue' && computer === 'paladin') {
        return -1;
    }
    if (pick === 'sorcerer' && computer === 'rogue') {
        return -1;
    }
    if (pick === 'paladin' && computer === 'sorcerer') {
        return -1;
    } else {
        return 0;
    }
}
