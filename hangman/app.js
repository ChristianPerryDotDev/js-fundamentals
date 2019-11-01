const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle //getPuzzle()
guessesEl.textContent = game1.statusMessage //getStatus()

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.status === 'playing' ? game1.handleGuess(guess) : doNothing()
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

const doNothing = () => {}

// CALLBACK ABSTRACTION

getPuzzle("1", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the http request and call the callback with country information
// 4. Use the callback to print the country name

getCountryDetails("MX", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})



// Making an HTTP request

// const countryCode = "CA"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('y u no work')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()

