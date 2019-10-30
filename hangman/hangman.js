// 1. Disable new guesses unless playing
// 2. Setup a new method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat".
// Finished -> Great work! You guessed the word.

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.handleGuess = function (guess) {
    // convert guess to lowercase
    guess = guess.toLowerCase()

    // analyze guess
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    // check if guess is valid
    if (typeof guess !== 'string') {
        throw Error('guess must be a letter')
    } else if (guess.length !== 1) {
        throw Error('guess must only be one letter')
    }

    // check if guess is unique
    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    // decrement remaining guesses if letter is not in puzzle
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

Hangman.prototype.getPuzzle = function () {
    return this.word.map( letter => this.guessedLetters.includes(letter) ? letter : '*').join('')
}

Hangman.prototype.getStatus = function () {

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }

    // SOLUTION USING LOCALECOMPARE:
    // const answer = (this.word.join(''))
    // const currentGuess = (this.getPuzzle())
    // const isSolved = (answer.localeCompare(currentGuess) === 0)
    // if (isSolved) {
    //     this.status = 'finished'
    // } else if (this.remainingGuesses > 0 && !isSolved) {
    //     this.status = 'playing'
    // } else {
    //     this.status = 'failed'
    // }

    return this.displayStatus(`${this.status}`)
}

Hangman.prototype.displayStatus = function (message) {
    switch (message) {
        case 'playing':
            return `Current guesses: ${this.remainingGuesses}`
        case 'failed':
            return `Nice try! The word was ${this.word.join()}`
        case 'finished':
            return `The winner is you`
    }
}


