import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoStore from '../data/TodoStore';

function getStores() {
  return [ TodoStore ];
}

function getState() {
  const { todos, todo } = TodoStore.getState();
  return {
    todos,
    todo
  };
}

export default Container.createFunctional(AppView, getStores, getState);