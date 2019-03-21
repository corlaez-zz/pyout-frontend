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
      { data1: "The Grasslands", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" },
      { data1: "Paradise Found", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" },
      { data1: "Smoke On The Water", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" },
      { data1: "Headline", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" }
      { data1: "Hello World", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" },
      { data1: "Enter Sandman", data2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.", data3: "Data 3", data4: "Data 4" }
    ]
  }
};

export default state;
