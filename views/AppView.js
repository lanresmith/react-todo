import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function AppView(props) {
  return (
    <div>
      <h1>Welcome to React Todo App!</h1>
      <TodoForm todo={props.todo} />
      <TodoList todos={props.todos} />
    </div>
  )
}

export default AppView;