import * as ko from "knockout";

class Todo {
  title;
  previousTitle;
  completed;
  editing;

  constructor(title: string, completed = false) {
    this.title = ko.observable(title);
    this.completed = ko.observable(completed);
    this.editing = ko.observable(false);
  }
}

export default Todo;
