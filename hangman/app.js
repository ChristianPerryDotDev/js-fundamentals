const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const doNothing = () => {}
let game1

// puzzleEl.textContent = game1.puzzle //getPuzzle()
// guessesEl.textContent = game1.statusMessage //getStatus()

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.status === 'playing' ? game1.handleGuess(guess) : doNothing()
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// CALLBACK ABSTRACTION

// getPuzzle('1').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`${err}`)
// })

