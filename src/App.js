import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  state = {todos:[], todo:''};

  addTodo = (event) => {
    event.preventDefault();
  
    // construct a new todo
    const todo = {
      id: generateId(),
      name: this.state.todo,
      complete: false,
    }

    if (todoExists(this.state.todos, todo)) {
      return;
    }

    this.setState({
      todos: this.state.todos.concat(todo)
    });
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.complete = !todo.complete;
        return todo
      })
    });
  }

  handleChange = (event) => {
    const target = event.target
    this.setState({[target.name]: target.value});
  }

  render() {
    return (
      <div>
        <h1>Welcome to React Todo App!</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            />{' '}
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.state.todos} remove={this.removeTodo} toggle={this.toggleTodo} />
      </div>
    )
  }
}

function todoExists(todos, todo) {
  return undefined !== todos.find(({name}) => name.toUpperCase() === todo.name.toUpperCase())
}

function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

export default App;