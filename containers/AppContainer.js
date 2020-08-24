import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoStore from '../data/TodoStore';
import TodoActions from "../data/TodoActions";

function getStores() {
  return [ TodoStore ];
}

function getState() {
  const { todos, todo } = TodoStore.getState();
  return {
    todos,
    todo,
    onInputChange: TodoActions.changeInput,
    onAddTodo: TodoActions.addTodo,
    onRemoveTodo: TodoActions.removeTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(AppView, getStores, getState);