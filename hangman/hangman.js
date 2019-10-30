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
    // SOLUTION USING EVERY:
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // SOLUTION USING FILTER:
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = (lettersUnguessed === 0)


    // SOLUTION USING FOREACH:
    // let finished = true
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
    //         // do nothing
    //     } else {
    //         finished = false
    //     }
    // })

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

    console.log(`${this.status}`)
}




