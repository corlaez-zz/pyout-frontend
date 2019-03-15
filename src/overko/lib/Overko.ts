import createStore, { Store } from "./createStore"
import config from "../config"

// config
export type IConfiguration = {
    onInitialize?: any
    state?: {}
    effects?: {}
}
export interface IConfig<ThisConfig extends IConfiguration> {
    state: ThisConfig['state'] & {}
    effects: ThisConfig['effects'] & {}
}
declare interface Config extends IConfig<typeof config> {}

// initialize
export interface IOnInitialize<ThisConfig extends IConfiguration> {
    (context: ThisConfig): void
}
export interface OnInitialize extends IOnInitialize<Config> {}

export class Overko<ThisConfig extends IConfiguration> {
    store: Store
    effects: any
    onInitialize: () => void

    constructor(config: ThisConfig) {
        this.store = createStore(config.state)
        this.effects = config.effects
        this.onInitialize = () => {
            config.onInitialize(this.getSnapshot())
        }
    }

    getSnapshot = () => {
        const state = this.store.getState()
        const snapshot: Config = {
            state: state(),
            effects: this.effects
        }
        return snapshot
    }
}

export function createOverko<Config extends IConfiguration>(
    config: Config
  ): Overko<Config> {
    const overko = new Overko(config)
    overko.onInitialize()
    return overko
}

export function createOverkoMock<Config extends IConfiguration> (config: Config, mockedEffects): Overko<Config> {
    return new Overko({
        state: config.state,
        effects: {...config.effects, ...mockedEffects},
        onInitialize: config.onInitialize
    })
}
