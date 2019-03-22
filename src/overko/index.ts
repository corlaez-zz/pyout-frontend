import { createOverko, createConnect, IConnect } from "overko";
import { IConfig, IOnInitialize, IAction } from "overko/dist/types";
import * as api from "./effects/api";
import * as todosCache from "./effects/todosCache";
import state from "./state";
import * as actions from "./actions";
import onInitialize from "./onInitialize";

export const config = {
  state,
  effects: { api, todosCache },
  onInitialize,
  actions
};

interface Config extends IConfig<typeof config> {}
export interface OnInitialize extends IOnInitialize<Config> {}
export interface Action<Input = void> extends IAction<Config, Input> {}

export const overko = createOverko(config);

export interface Connect extends IConnect<typeof config> {}
export const connect = createConnect(overko);
