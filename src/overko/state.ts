import Todo from "../models/Todo";

const state = {
  todos: {
    list: [] as Todo[],
    input: ""
  },
  gender: {
    checkGender: [],
    options: [{ name: "Male", value: 1 }, { name: "Female", value: 2 }]
  },
  adsetlist: {
    data: [
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" },
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" },
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" },
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" }
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" },
      { data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: "Data 4" }
    ]
  }
};

export default state;
