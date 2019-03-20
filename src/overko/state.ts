import Todo from "../models/Todo";

const state = {
  todos: {
    list: [] as Todo[],
    input: ""
  },
  gender: {
    checkGender: [],
    options: [{ name: "Male", value: 1 }, { name: "Female", value: 2 }]
  }
};

export default state;
