import React from 'react';
import TodoActions from '../data/TodoActions';

export default (props) => {
  const { addTodo, changeInput } = TodoActions
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add Todo"
        name="todo"
        value={props.todo}
        onChange={changeInput}
        />{' '}
      <button type="submit">Add Todo</button>
    </form>
  )
}
