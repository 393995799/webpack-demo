const $ = require('jquery')

class Todo {
	constructor({priority, name}) {
		this.priority = priority
		this.name = name
	}

	render() {
		return $('<li>').addClass('todo').append(
			$('<span>').addClass('priority').text(this.priority)).append(
			$('<span>').addClass('name').text(this.name)
		)
	}
}

module.exports = Todo