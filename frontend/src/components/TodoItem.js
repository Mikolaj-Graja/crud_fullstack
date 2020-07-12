import React from 'react';

const TodoItem = (props) => {
	return (
		<li>
			<span>{props.name}</span>
			<button onClick={props.remove}>Usuń</button>{' '}
		</li>
	);
};

export default TodoItem;
