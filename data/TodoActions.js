import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
  addTodo(event) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      event,
    });
  },
  removeTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.REMOVE_TODO,
      id,
    });
  },
  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },
  changeInput(event) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.CHANGE_INPUT,
      event,
    });
  },
};

export default Actions;