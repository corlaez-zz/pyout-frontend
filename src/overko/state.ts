import Todo from "../models/Todo";

export interface GenderOption {
  name: string;
  value: string;
}

export interface PlatformOption {
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
    options: [] as GenderOption[]
  },
  platform: {
    checkPlatform: [] as string[],
    options: [] as PlatformOption[]
  }
};

export default state;
