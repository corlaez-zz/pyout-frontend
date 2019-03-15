import * as ko from "knockout";
import { localStorageItem } from "../../config/constants";

const defaultTodos = [
  { title: "Made with Knockout." },
  { title: "Written in TypeScript." },
  { title: "Python provides the time." }
];

export const getTodos = () => {
  const stringTodos =
    window.localStorage.getItem(localStorageItem) ||
    JSON.stringify(defaultTodos);
  const todos = ko.utils.parseJson(stringTodos);
  return todos;
};

export const setTodos = todos => {
  window.localStorage.setItem(localStorageItem, ko.toJSON(todos));
};
