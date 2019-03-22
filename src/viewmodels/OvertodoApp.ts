import * as ko from "knockout";
import Todo from "../models/Todo";
import template from "./TodoApp.html";
import { connect, Connect } from "../overko";

class OvertodoAppVM {
  todos: ko.ObservableArray<Todo>;
  current: ko.Observable<string>;
  add: () => void;
  remove: (todo: Todo) => void;
  removeCompleted: () => void;
  editItem: (item: Todo) => void;
  stopEditing: (item: Todo) => void;
  cancelEditing: (item: Todo) => void;
  completedCount: ko.Computed<number>;
  remainingCount: ko.Computed<number>;
  allCompleted: ko.Computed<any>;
  getLabel: (count: any) => "item" | "items";
  constructor(props: Connect) {
    const self = this;
    const setTodos = props.overko.effects.todosCache.setTodos;
    self.todos = props.overko.state.todos.list;

    // store the new todo value being entered
    self.current = props.overko.state.todos.input;

    // add a new todo, when enter key is pressed
    self.add = function() {
      const current = self.current().trim();

      if (current) {
        self.todos.push(new Todo(current));
        self.current("");
      }
    };

    // remove a single todo
    self.remove = function(todo) {
      self.todos.remove(todo);
    };

    // remove all completed todos
    self.removeCompleted = function() {
      self.todos.remove(function(todo) {
        return todo.completed();
      });
    };

    // edit an item
    self.editItem = function(item) {
      item.editing(true);
      item.previousTitle = item.title();
    };

    // stop editing an item.  Remove the item, if it is now empty
    self.stopEditing = function(item) {
      item.editing(false);

      const title = item.title();
      const trimmedTitle = title.trim();

      // Observable value changes are not triggered if they're consisting of whitespaces only
      // Therefore, compare untrimmed version with a trimmed one to check whether anything changed
      // And if yes, we've to set the new value manually
      if (title !== trimmedTitle) {
        item.title(trimmedTitle);
      }

      if (!trimmedTitle) {
        self.remove(item);
      }
    };

    // cancel editing an item and revert to the previous content
    self.cancelEditing = function(item) {
      item.editing(false);
      item.title(item.previousTitle);
    };

    // count of all completed todos
    self.completedCount = ko.computed(function() {
      return ko.utils.arrayFilter(self.todos(), function(todo) {
        return todo.completed();
      }).length;
    });

    // count of todos that are not complete
    self.remainingCount = ko.computed(function() {
      return self.todos().length - self.completedCount();
    });

    // writeable computed observable to handle marking all complete/incomplete
    self.allCompleted = ko.computed({
      //always return true/false based on the done flag of all todos
      read: function() {
        return !self.remainingCount();
      },
      // set all todos to the written value (true/false)
      write: function(newValue) {
        ko.utils.arrayForEach(self.todos(), function(todo) {
          // set even if value is the same, as subscribers are not notified in that case
          todo.completed(newValue);
        });
      }
    });

    // helper function to keep expressions out of markup
    self.getLabel = function(count) {
      return ko.utils.unwrapObservable(count) === 1 ? "item" : "items";
    };

    // internal computed observable that fires whenever anything changes in our todos
    ko.computed(function() {
      // store a clean copy to local storage, which also creates a dependency
      // on the observableArray and all observables in each item
      setTodos(self.todos);
    }).extend({
      rateLimit: { timeout: 500, method: "notifyWhenChangesStop" }
    }); // save at most twice per second
  }
}

export const registerOvertodoApp = () => {
  const config: ko.components.Config = {
    viewModel: connect(OvertodoAppVM),
    template
  };
  ko.components.register("overtodo-app", config);
};

export default OvertodoAppVM;
