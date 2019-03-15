import { Overko, IConfiguration } from "./Overko";

const throwIfNotAFunction = (o, message) => {
  if (typeof o !== 'function') {
    throw new Error(message)
  }
};

const createConnect = <Config extends IConfiguration>(overkoInstance: Overko<Config>) => (ViewModel) => {
  throwIfNotAFunction(
    ViewModel,
    `Invalid type '${typeof ViewModel}' for ViewModel passed to result of connect(). ViewModel must be a function.`
  );
  return ownParams => {
    const state = overkoInstance.store.getState()
    const overkoParam = { state: state(), effects: overkoInstance.effects}
    const mergedParams = {
      overko: overkoParam,
      ...ownParams
    }
    return new ViewModel(mergedParams)
  };
};

export default createConnect

export interface IConnect<Config extends IConfiguration> {
    overko: {
        state: Config['state']
        effects: Config['effects']
    }
}
