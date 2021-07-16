# spelling-wasp
## Spoiler Alert: NYT Spelling Bee Solver

After cloning, run `get_words.sh` to download a list of English words. They will be saved to `words.txt`.

Then run, for example, `./solve_puzzle.js l inmect` to solve the puzzle where L is the required letter and INMECT are the optional letters.

*Note: NYT's puzzle accepts words based on editorial judgement. This repo finds all words for a given puzzle that are in `words.txt`.*
