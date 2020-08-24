import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  complete: false,
  name: '',
});

export default Todo;