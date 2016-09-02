const $ = require('jquery')

class TodoList {
	constructor(todoList = []) {
		this.todoList = todoList
	}

	add(todo) {
		this.todoList.push(todo)
	}

	render() {
		return $('<ul>').addClass('todo-list').append(this.todoList.map(function(todo) {
			return todo.render()
		}))
	}
}

module.exports = TodoList
