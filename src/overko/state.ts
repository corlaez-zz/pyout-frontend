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
  },
  platform: {
    checkPlatform: [],
    options: [
      { name: "Option 1", value: 1 },
      { name: "Option 2", value: 2 },
      { name: "Option 3", value: 3 },
      { name: "Option 4", value: 4 }
    ]
  }
};

export default state;
