import Todo from "../models/Todo";

export interface GenderOption {
  name: string;
  value: string;
}

const state = {
  todos: {
    list: [] as Todo[],
    input: ""
  },
  gender: {
    checkGender: [] as string[],
    options: [
      { name: "Male", value: "1" },
      { name: "Female", value: "2" }
    ] as GenderOption[]
  }
};

export default state;
