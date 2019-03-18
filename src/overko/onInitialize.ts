import Todo from "../models/Todo";
import { OnInitialize } from ".";

const onInitialize: OnInitialize = ({ state, effects }) => {
  const todos = effects.todosCache.getTodos();
  todos.forEach(todo =>
    state.todos.list.push(new Todo(todo.title, todo.completed))
  );
};

export default onInitialize;
