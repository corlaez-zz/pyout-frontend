import { Action } from ".";
import Todo from "../models/Todo";

export const addTodo: Action<Todo> = ({ state }, todo) => {
  state.todos.list.push(todo);
};
