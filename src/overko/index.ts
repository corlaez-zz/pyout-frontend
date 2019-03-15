import config from "./config";
import { createOverko } from "./lib/Overko";
import createConnect, { IConnect } from "./lib/createConnect";

const overko = createOverko(config);

export interface Connect extends IConnect<typeof config> {}
export const connect = createConnect(overko);
