const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.handleGuess(guess)
    game1.getStatus()
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
})
