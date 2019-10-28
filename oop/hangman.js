const Hangman = function (word, remainingGuesses, guessedLetters = ['']) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = guessedLetters
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = []

    try {
        this.word.forEach((letter) => {
            if (letter === ' ') {
                puzzle.push(' ')
            } else {
                this.guessedLetters.includes(letter) ? puzzle.push(letter) : puzzle.push('*')
            }
        })
    } catch {
        console.log('y u no work')
    }

    return puzzle.join('')
}

const game1 = new Hangman('cat', 3, ['c'])
const game2 = new Hangman('New Jersey', 5, ['n', 'e', 'w'])

console.log(game2.getPuzzle())

console.log(game1)
console.log(game2)