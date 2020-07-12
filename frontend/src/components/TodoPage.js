import React from 'react';
import TodoItem from './TodoItem';
class TodoPage extends React.Component {
	state = {
		todoList: [
			{ id: 0, name: 'Projekt' },
			{ id: 1, name: 'Gotowanie' },
			{ id: 2, name: 'Magisterka' },
		],
		newItem: '',
	};

	handleRemove = (id) => {
		console.log('działa');
		const index = this.state.todoList.findIndex((element) => element.id === id);
		const todoList = [...this.state.todoList];
		todoList.splice(index, 1);
		this.setState({ todoList });
	};
	handleInputChange = (e) => {
		this.setState({ newItem: e.target.value });
	};
	handleAddItem = (e) => {
		const todoList = this.state.todoList;
		const id = todoList.length;
		const newItem = this.state.newItem;
		todoList.push({ id: id, name: newItem });
		this.setState({ todoList });
		e.preventDefault();
	};
	handleSave = () => {
		console.log('not implemented... yet');
	};
	render() {
		return (
			<>
				<h1>Lista</h1>
				<ul>
					<form action='submit' onSubmit={this.handleAddItem}>
						<input type='text' onChange={this.handleInputChange} />
						<button>Dodaj</button>
					</form>
					{this.state.todoList.map((item) => (
						<TodoItem
							name={item.name}
							key={item.id}
							id={item.id}
							remove={this.handleRemove.bind(this, item.id)}
						/>
					))}
					<button onSubmit={this.handleSave}>Zapisz listę</button>
				</ul>
			</>
		);
	}
}
export default TodoPage;
