import * as ko from "knockout";

const state = {
  todos: {
    list: ko.observableArray(),
    input: ko.observable("")
  },
  gender: {
    checkGender: ko.observable("Male"),
    options: ko.observableArray([
      { name: "Male", value: 1 },
      { name: "Female", value: 2 }
    ])
  },
  countries: {
    selectedOption: ko.observable(""),
    options: ko.observableArray([
      { name: "Perú", value: 1 },
      { name: "United States", value: 2 },
      { name: "Brasil", value: 2 },
      { name: "Canada", value: 2 },
      { name: "Colombia", value: 2 }
    ])
  }
};

export default state;
