import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { initialState, reducer } from './reducers/reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTask = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: new Date()
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