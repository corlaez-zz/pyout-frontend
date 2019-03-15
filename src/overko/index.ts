import config from "./config";
import { createOverko, createConnect, IConnect } from "overko";
import { IConfig } from "overko/dist/types";

// For explicit typing check the Typescript guide
declare module "overko" {
  interface Config extends IConfig<typeof config> {}
}

const overko = createOverko(config);

export interface Connect extends IConnect<typeof config> {}
export const connect = createConnect(overko);
