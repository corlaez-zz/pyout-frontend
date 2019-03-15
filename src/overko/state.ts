import * as ko from "knockout";

const state = {
  todos: {
    list: ko.observableArray(),
    input: ko.observable("")
  }
};

export default state;
