// Read existing notes from local storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to local storage
const saveNotes = function() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNotes = function(id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function() {
        removeNotes(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.innerHTML = 'Unnamed note'
    }
    textEl.setAttribute('href', `edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Sort your notes by one of three ways
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (b.createdAt < a.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            }else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        }) 
    } else {
        return notes
    }
}

// Create new note
const createNote = function(notes) {
    const noteID = uuidv4()
    const createdAt = moment().valueOf()
    const updatedAt = moment().valueOf()
    // console.log(moment(updatedAt).fromNow())
    notes.push({
        id: noteID,
        title: '',
        body: '',
        createdAt,
        updatedAt
    })
    location.assign(`/edit.html#${noteID}`)
}









// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate last edited message
const generateLastEdited = function (timestamp) {
    return dateEl.textContent = `Last updated ${moment(timestamp).fromNow()}`
}