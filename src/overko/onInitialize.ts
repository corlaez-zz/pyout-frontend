import Todo from "../models/Todo";
import { OnInitialize } from ".";
import { GenderOption } from "./state";

const todosInitialize: OnInitialize = async ({ state, effects }) => {
  const todos = effects.todosCache.getTodos();
  todos.forEach(todo =>
    state.todos.list.push(new Todo(todo.title, todo.completed))
  );
};

const gendersInitialize: OnInitialize = async ({ state, effects }) => {
  const res = await effects.api.genders();
  const parsedOptions = res.map((opt: any) => {
    return {
      value: opt.id,
      name: opt.name
    } as GenderOption;
  });
  state.gender.options(parsedOptions);
};

const platformsInitialize: OnInitialize = async ({ state, effects }) => {
  const res = await effects.api.platforms();
  const parsedPlatforms = res.map((opt: any) => {
    return {
      value: opt.id,
      name: opt.name
    } as GenderOption;
  });
  state.platform.options(parsedPlatforms);
};

const onInitialize: OnInitialize = async context => {
  return Promise.all([
    todosInitialize(context),
    gendersInitialize(context),
    platformsInitialize(context)
  ]);
};

export default onInitialize;
