import Todo from "../models/Todo";
import { OnInitialize } from ".";
import { GenderOption } from "./state";

const todosInitialize: OnInitialize = async ({ state, effects }) => {
  const todos = effects.todosCache.getTodos();
  todos.forEach(todo =>
    state.todos.list.push(new Todo(todo.title, todo.completed))
  );
};

const optionsInitialize: OnInitialize = async ({ state, effects }) => {
  const res = await effects.api.genders();
  const parsedOptions = res.genders.map((opt: any) => {
    return {
      value: opt.id,
      name: opt.name
    } as GenderOption;
  });
  state.gender.options(parsedOptions);
};

const platformsInitialize: OnInitialize = async ({ state, effects }) => {
  const res = await effects.api.platforms();
  const parsedPlatforms = res.platforms.map((opt: any) => {
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
    optionsInitialize(context),
    platformsInitialize(context)
  ]);
};

export default onInitialize;
