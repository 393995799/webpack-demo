const $ = require('jquery')
const Todo = require('./todo')
const TodoList = require('./todoList')

require('../../css/app.scss')

const containerEl = $('<main>')
containerEl.append(
	$('<h1>').text('My Todo List')
)

const initialData = [
	{
		priority: 0,
		name: '吃饭'
	},
	{
		priority: 1,
		name: '睡觉'
	},
	{
		priority: 2,
		name: '写代码'
	},
	{
		priority: 3,
		name: '还能干嘛啊'
	}
]

const list = new TodoList(
	initialData.map(function(todoData) {
		return new Todo(todoData)
	})
)

containerEl.append(list.render())
$('body').prepend(containerEl)
