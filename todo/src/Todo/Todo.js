import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducers';



const Todo = () => {


    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChange = e => {
        setNewTodo(e.target.name);
    }

    const addTask = e => {
        e.preventDefault();

    }


    return (
        <div>
            <h3>{state.item}{" "}</h3>
            <form onSubmit={addTask}>
                <input
                    name="task"
                    placeholder="what needs to get done?"
                    type="text"
                    value={newTodo}
                    onChange={handleChange}
                />
                <button>
                    Add Task
                    </button>
            </form>

        </div>
    )
}

export default Todo;