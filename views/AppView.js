import React from 'react';
import TodoList from './TodoList';

function AppView(props) {
  return (
    <div>
      <h1>Welcome to React Todo App!</h1>
      <form onSubmit={props.onAddTodo}>
        <input
          type="text"
          placeholder="Add Todo"
          name="todo"
          value={props.todo}
          onChange={props.onInputChange}
          />{' '}
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={props.todos} remove={props.onRemoveTodo} toggle={props.onToggleTodo} />
    </div>
  )
}

export default AppView;