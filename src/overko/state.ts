import * as ko from "knockout";

const state = {
  todos: {
    list: ko.observableArray(),
    input: ko.observable("")
  },
  gender: {
    checkGender: ko.observable("Male");
  }
};

export default state;
