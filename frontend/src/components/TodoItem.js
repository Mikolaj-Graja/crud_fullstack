import React from 'react';

class TodoItem extends React.Component {
	state = {
		isActive: false,
	};
	handleEdit = () => {
		this.setState({ isActive: !this.state.isActive });
		this.props.modify();
	};
	render() {
		return (
			<li className={this.state.isActive ? 'edit' : null}>
				<span>{this.props.name}</span>
				<button onClick={this.props.remove} className={'btn btn-secondary'}>
					Usuń
				</button>{' '}
				<button onClick={this.handleEdit} className={'btn btn-secondary'}>
					Edytuj
				</button>
			</li>
		);
	}
}

export default TodoItem;
