const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const doNothing = () => {}
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.status === 'playing' ? game1.handleGuess(guess) : doNothing()
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    for (const c of game1.puzzle) {
        puzzleEl.innerHTML += `<span>${c}</span>`
    }
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

