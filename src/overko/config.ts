import * as api from "./effects/api";
import * as todosCache from "./effects/todosCache";
import state from "./state";
import * as actions from "./actions";
import onInitialize from "./onInitialize";

const config = {
  state,
  effects: { api, todosCache },
  onInitialize,
  actions
};

export default config;
