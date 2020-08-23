import React from 'react';

export default (props) => {
  return (
    <ul>
      {
        props.todos.map(todo => (
          <li key={todo.id} className={todo.complete ? 'complete' : ''}>
            <span onClick={() => props.toggle(todo.id)}>{todo.name}</span>{' '}
            <button onClick={() => props.remove(todo.id)}>x</button>
          </li>
        ))
      }
    </ul>
  )
}
