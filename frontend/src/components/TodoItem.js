import React from 'react';

class TodoItem extends React.Component {
	state = {
		isActive: false,
	};
	handleModify = () => {
		this.setState({ isActive: !this.state.isActive });
		this.props.modify();
	};
	render() {
		return (
			<li className={this.state.isActive ? 'edit' : null}>
				<span>{this.props.name}</span>
				<button onClick={this.props.remove}>Usuń</button>{' '}
				<button onClick={this.handleModify}>Edytuj</button>
			</li>
		);
	}
}

export default TodoItem;
