import React from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
class TodoPage extends React.Component {
	state = {
		todoList: [],
		newItem: '',
		buttonFunction: 'Dodaj',
		itemId: '',
	};

	updateList = () => {
		fetch('http://localhost:3009/getTodoList')
			.then((response) => response.json())
			.then((list) => this.setState({ todoList: list }))
			.catch((err) => console.log(err));
	};

	handleRemove = (id) => {
		axios
			.delete(`http://localhost:3009/deleteTodo/${id}`)
			.then(console.log(`item ${id} deleted`))
			.then(this.updateList())
			.catch((err) => console.log(err));
	};
	handleInputChange = (e) => {
		this.setState({ newItem: e.target.value });
	};

	handleSubmit = () => {
		if (this.buttonFunction === 'Dodaj') {
			this.handleAddItem();
		} else {
			this.runModify();
		}
	};

	handleAddItem = () => {
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
	handleModify = (e, id) => {
		this.setState({ buttonFunction: 'Edytuj', itemId: id });
	};

	runModify = () => {
		if (!this.state.newItem) alert('najpierw wprowadź tekst');
		else {
			const newItem = {
				newItem: this.state.newItem,
			};
			const id = this.state.itemId;
			console.log(newItem);
			axios
				.put(`http://localhost:3009/modifyTodo/${id}`, newItem)
				.then(
					console.log(
						`item ${id} zmodyfikowany, nowa zawatość to ${newItem.newItem}`
					)
				)
				.then(
					this.setState({ newItem: '', buttonFunction: 'Dodaj', itemId: '' })
				)
				.catch((err) => console.log(err));

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
					<form onSubmit={this.handleSubmit}>
						<input
							type='text'
							onChange={this.handleInputChange}
							value={this.state.newItem}
						/>
						<button>{this.state.buttonFunction}</button>
					</form>
					{this.state.todoList.map((item) => (
						<TodoItem
							name={item.item}
							key={item.id}
							id={item.id}
							remove={this.handleRemove.bind(this, item.id)}
							modify={this.handleModify.bind(this, item.id)}
						/>
					))}
				</ul>
			</>
		);
	}
}
export default TodoPage;
