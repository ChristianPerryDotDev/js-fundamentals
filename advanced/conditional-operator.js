// const myAge = 35
// const message = myAge >= 18 ? 'You can vote' : 'No vote for you'
// console.log(message)

const myAge = 21
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'No can have page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Fyblee', 'Gogun', 'Faloop', 'Yam', 'Azul']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too much persons')

