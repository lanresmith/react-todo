import React from 'react';
import TodoActions from '../data/TodoActions';

export default (props) => {
  const { toggleTodo, removeTodo } = TodoActions
  return (
    <ul>
      {
        [...props.todos.values()].map(todo => (
          <li key={todo.id} className={todo.complete ? 'complete' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.name}</span>{' '}
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))
      }
    </ul>
  )
}
