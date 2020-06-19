import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { initialState, todoReducer } from './reducers/reducers';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTask = (task) => {
    const newTodo = {
      todo: task,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
  }

  const handleCompleted = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="App">
      <h2>Your Todos!</h2>
      <TodoForm addTask={addTask} />
      <TodoList state={state} handleCompleted={handleCompleted} />

      <button
        onClick={() => {
          clearCompleted()
        }}>
          Clear Completed</button>

    </div>
  );

}

export default App;