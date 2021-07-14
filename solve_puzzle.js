const fs = require('fs');
const path = require('path');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const words = fs.readFileSync(path.join(__dirname, 'words.txt'), {encoding: 'utf-8'}).split('\n');
console.log(words);

for(let requiredChar of alphabet) {
    
}