// 1. Add event handler to checkbox
// 2. Modify the correct objects completed property -> toggleTodo
// 3. Save und rerender

// Fetch existing todos from localStorage
getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Generate new item and add it to array
const generateNewItem = function(e) {
    const newItem = {
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    }
    todos.push(newItem)
    e.target.elements.text.value = ''
}

// Save todos to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = generateFilteredTodos(todos, filters)

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = ''
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        generateTodoDOM(todo)
    })
}

// Get filtered todos
const generateFilteredTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    return filteredTodos
}

// Generate the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}

// Remove todo
const removeTodos = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }

    renderTodos(todos, filters)
}

// Toggle todo completion when checkbox is clicked
const toggleTodo = function(id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}


// Generate the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('click', function() {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup todo button
    button.textContent = 'Remove'
    button.addEventListener('click', function() {
        removeTodos(todo.id)
    })
    todoEl.appendChild(button)

    document.querySelector('#todo-list').appendChild(todoEl)
}

