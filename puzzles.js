// unique puzzles:
// first letter is the center (required) letter
// 26
// remaining 6 letters options number
// 25 choose 6
// total puzzles
// 26 * (25 choose 6) = 26 * 177100 = 4,604,600

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const remove = (str, char) => {
    return `${str}`.replace(char, '');
};

const choose = (str, count) => {
    if(count === 1) {
        const chooses = new Set();
        for(let choose of str.split('')) {
            chooses.add(choose);
        }
        return chooses;
    }

    const chooses = new Set();
    for(let firstChar of str) {
        const subChooses = choose(remove(str, firstChar), count-1);
        subChooses.forEach(subChoose => {
            chooses.add(`${firstChar}${subChoose}`.split('').sort().join(''));
        });
    }
    return chooses;
};

for(let requiredChar of alphabet) {
    // iterate the chooses
    // easier to think about it this way:
    // brute force all 26^6, then uniq their sorted representations
    const chooses = choose(remove(alphabet, requiredChar), 6);
    for(let choose of chooses) {
        console.log(`${requiredChar} ${choose}`);
    }
}