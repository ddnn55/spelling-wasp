#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function solve(requiredChar, otherChars) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = new Set();
    const wordsByContainedLetter = {};
    for(let char of alphabet) {
        letters.add(char);
        wordsByContainedLetter[char] = [];
    }

    const words = fs.readFileSync(path.join(__dirname, 'words.txt'), {encoding: 'utf-8'}).split('\n').map(word => word.toLowerCase());

    for(let word of words) {
        if(word.length < 4) {
            continue;
        }
        for(let char of word) {
            if(letters.has(char)) {
                wordsByContainedLetter[char].push(word);
            }
        }
    }

    const puzzleAlphabet = new Set();
    puzzleAlphabet.add(requiredChar);
    for(let char of otherChars) {
        puzzleAlphabet.add(char);
    }

    const validWords = new Set();

    for(let word of wordsByContainedLetter[requiredChar]) {
        let valid = true;
        for(let char of word) {
            if(!puzzleAlphabet.has(char)) {
                valid = false;
            }
        }
        if(valid) {
            validWords.add(word);
        }
    }
    return Array.from(validWords);
}

if(require.main === module) {
    const requiredChar = process.argv[2];
    const otherChars = process.argv[3];

    console.error({requiredChar, otherChars});

    const words = solve(requiredChar, otherChars);
    console.log(words.join('\n'));
}
else {
    module.exports = solve;
}