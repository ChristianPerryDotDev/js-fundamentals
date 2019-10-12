let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener('click', function(e) {
    createNote(notes)
    saveNotes(notes)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const now = moment()
// console.log(now.toString())
now.minute(1)
now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format("MMMM Do, YYYY")) 
// console.log(now.fromNow())   
const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)

const bday = moment("09-12-1984", "MM-DD-YYYY")
// console.log(bday.format("MMMM D, YYYY"))

// 1. Create a new moment
// 2. Set m, d, y, to birthday
// 3. format as "September 12, 1984"

// const now = new Date()
// const timestamp = now.getTime()

// const date1 = new Date('February 19 2014')
// const time1 = date1.getTime()

// const date2 = new Date('March 3 1965 03:12:44')
// const time2 = date2.getTime()

// if (time1 > time2) {
//     console.log(date1.toString())
// } else {
//     console.log(date2.toString())
// }

// const myDate = new Date(timestamp)


// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)