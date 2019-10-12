const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#note-remove')
const dateEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleEl.value = note.title
bodyEl.value = note.body
dateEl.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener ('input', function(e) {
    note.title = e.target.value
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener ('input', function(e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeEl.addEventListener ('click', function(e) {
    removeNotes(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener ('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleEl.value = note.title
        bodyEl.value = note.body
        titleEl.value = generateLastEdited(note.updatedAt)
    } 
})


