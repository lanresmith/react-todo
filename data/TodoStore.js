import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Todo from './Todo';
import { generateId } from '../utils/functions';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return {
      todos: Immutable.OrderedMap(),
      todo: '',
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        action.event.preventDefault();

        const name = state.todo.trim();
        if (!name.length || todoExists(state.todos, name)) {
          return state;
        }

        const id = generateId();
        const todos = state.todos.set(id, Todo({
          id,
          name,
          complete: false,
        }));
        // clear text input
        const todo = '';
        // always create a 'fresh' object
        state = Object.assign({}, state, {todos, todo});
        break;

      case TodoActionTypes.REMOVE_TODO:
        state = Object.assign({}, state, {todos: state.todos.delete(action.id)});
        break;

      case TodoActionTypes.TOGGLE_TODO:
        state = Object.assign({}, state, {
          todos: state.todos.update(
            action.id,
            todo => todo.set('complete', !todo.complete)
          )
        });
        break;

      case TodoActionTypes.CHANGE_INPUT:
        const target = action.event.target;
        // we use this object property notation (with target.name) in order to easily
        // accomodate more inputs that may be added in future, else, 'todo' works.
        state = Object.assign({}, state, {[target.name]: target.value});
        break;
    }

    return state;
  }
}

function todoExists(todos, todoName) {
  return undefined !== [...todos.values()].find(({name}) => name.toUpperCase() === todoName.toUpperCase())
}

export default new TodoStore();