const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle //getPuzzle()
guessesEl.textContent = game1.statusMessage //getStatus()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.status === 'playing' ? game1.handleGuess(guess) : doNothing()
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

const doNothing = () => {}

