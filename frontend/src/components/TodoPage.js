import React from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
class TodoPage extends React.Component {
	state = {
		todoList: [],
		newItem: '',
	};

	updateList = () => {
		fetch('http://localhost:3009/getTodoList')
			.then((response) => response.json())
			.then((list) => this.setState({ todoList: list }))
			.catch((err) => console.log(err));
	};

	handleRemove = (id) => {
		// const index = this.state.todoList.findIndex((element) => element.id === id);
		// const todoList = [...this.state.todoList];
		// todoList.splice(index, 1);
		// this.setState({ todoList });
		console.log(id);
		axios
			.delete(`http://localhost:3009/deleteTodo/${id}`)
			.then(console.log(`item ${id} deleted`))
			.then(this.updateList())
			.catch((err) => console.log(err));
		this.updateList();
	};
	handleInputChange = (e) => {
		this.setState({ newItem: e.target.value });
	};
	handleAddItem = (e) => {
		// const todoList = this.state.todoList;
		// const id = todoList.length;
		// const newItem = this.state.newItem;
		// todoList.push({ id: id, name: newItem });
		// this.setState({ todoList });

		if (!this.state.newItem) alert('Zostawiłeś puste pole');
		else {
			const newItem = {
				item: this.state.newItem,
			};
			axios
				.post('http://localhost:3009/addTodo', newItem)
				.then(this.setState({ newItem: '' }))
				.catch((err) => console.log(err));
			// e.preventDefault();
			this.updateList();
		}
	};

	componentDidMount() {
		this.updateList();
	}

	render() {
		return (
			<>
				<h1>Lista</h1>
				<ul>
					<form onSubmit={this.handleAddItem}>
						<input
							type='text'
							onChange={this.handleInputChange}
							value={this.state.newItem}
						/>
						<button>Dodaj</button>
					</form>
					{this.state.todoList.map((item) => (
						<TodoItem
							name={item.item}
							key={item.id}
							id={item.id}
							remove={this.handleRemove.bind(this, item.id)}
						/>
					))}
				</ul>
			</>
		);
	}
}
export default TodoPage;
