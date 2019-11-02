class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    handleGuess(guess) {
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

        // update status
        this.updateStatus()
    }
    updateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
        return this.word.map( letter => (this.guessedLetters.includes(letter) || letter === ' ') ? letter : '*').join('')
    }
    get statusMessage() {
        switch(this.status) {
            case 'playing':
                return `Current guesses: ${this.remainingGuesses}`
            case 'failed':
                return `Nice try! The word was "${this.word.join('')}"`
            case 'finished':
                return `The winner is you`
        }
    }
}
