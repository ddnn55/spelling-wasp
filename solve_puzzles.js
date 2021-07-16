#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const solve = require('./solve_puzzle');

const puzzles = fs.readFileSync(path.join(__dirname, 'puzzles.txt'), {encoding: 'utf-8'}).split('\n');

for(let puzzle of puzzles) {
    const [requiredChar, otherChars] = puzzle.split(' ');
    const words = solve(requiredChar, otherChars);
    console.log(`${requiredChar} ${otherChars};${words.join(' ')}`);
}