const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatus()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.status === 'playing' ? play(game1, guess) : doNothing()
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatus()
})

const play = (game, guess) => {
    game.handleGuess(guess)
    game.getStatus()
}

const doNothing = () => {
    console.log("nothing")
}

