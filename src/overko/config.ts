import * as api from './effects/api'
import * as todosCache from './effects/todosCache'
import state from './state'
import onInitialize from './onInitialize'

export default {
    state,
    effects: { api, todosCache },
    onInitialize
}
