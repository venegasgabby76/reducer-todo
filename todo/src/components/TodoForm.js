import React, { useState } from 'react';

const TodoForm = (props)  => {
	const [form, setForm] = useState('');

	return(
		<form onSubmit={(e) => {
			e.preventDefault();
			props.addTask(form);
			setForm('');
		}}>
			<input 
				name='todo' 
				placeholder='Add Todo' 
				value={form}
				onChange={(e) => {
					setForm(e.target.value);
				}} 
			/>		
			<button type='submit'>Add Todo</button>
      
		</form>
	)
}

export default TodoForm;