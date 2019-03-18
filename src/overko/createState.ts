import * as ko from "knockout";
import Todo from "../models/Todo";

const createState = () => ({
  todos: {
    list: ko.observableArray<Todo>(),
    input: ko.observable("")
  }
});

export default createState;
