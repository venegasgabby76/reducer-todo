import React from 'react';

const Todo = (props)  => {

	return(
		<div>
			<h3 className={props.item.completed ? 'completed' : ''}
				onClick={() => {
					props.handleCompleted(props.item.id);
				}} >{props.item.todo}</h3>
		</div>
	)
}

export default Todo;