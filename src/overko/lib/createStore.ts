import * as ko from 'knockout'

export type Store = {
    getState(): any
    setState(state: any)
}

const createStore = (state) => {
    const stateObservable = ko.observable(state)
    
    function getState() {
        return stateObservable
    }

    function setState(state) {
        stateObservable(state)
    }
    return {
        getState,
        setState
    }
}

export default createStore
