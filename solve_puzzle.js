const fs = require('fs');
const path = require('path');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = new Set();
const wordsByContainedLetter = {};
for(let char of alphabet) {
    letters.add(char);
    wordsByContainedLetter[char] = [];
}


const words = fs.readFileSync(path.join(__dirname, 'words.txt'), {encoding: 'utf-8'}).split('\n').map(word => word.toLowerCase());

for(let word of words) {
    for(let char of word) {
        if(letters.has(char)) {
            wordsByContainedLetter[char].push(word);
        }
    }
}

console.log(wordsByContainedLetter)