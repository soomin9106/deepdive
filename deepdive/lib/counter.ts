import { useEffect, useState } from "react"

export type CState = { counter: number }
export type Value = { text: string }

// declare state outside component
let state:CState = {
    counter: 0
}

// getter 
export const getCounter = () => {
    return state
}

// make Initializer can get lazy initialization value or function
type Initializer<T> = T extends any ? T | ((prev: T) => T) : never

// setter
export const setCounter = <T>(nextState: Initializer<T>) => {
    state = typeof nextState === 'function' ? nextState(state) : nextState;
}


// implement store
type Store<CState> = {
    get: () => CState
    set: (action: Initializer<CState>) => CState
    subscribe: (callback: () => void) => () => void
}

// create Store
export const createStore = <CState extends unknown>(
    initialState: Initializer<CState>
): Store<CState> => {
    let state = typeof initialState !== 'function' ? initialState : initialState()

    const callbacks = new Set<() => void>()

    const get = () => state
    const set = (nextState: CState | ((prev: CState) => CState)) => {
        state = 
            typeof nextState === 'function'
            ? (nextState as (prev: CState) => CState)(state)
            : nextState

        callbacks.forEach((callback) => callback())

        return state
    }

    const subscribe = (callback: () => void) => {
        callbacks.add(callback)

        return () => {
            callbacks.delete(callback)
        }
    }

    return { get, set, subscribe }
}

// user custom hook 
export const useStore = <CState extends unknown>(store: Store<CState>) => {
    const [state, setState] = useState<CState>(() => store.get())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.get())
        })

        return unsubscribe
    }, [store])

    return [state, store.set] as const
}

// export const useStoreSelector = <CState extends unknown, Value extends unknown>(
//     store: Store<CState>,
//     selector: (state: CState) => Value
// ) => {
//     const [state, setState] = useState(() => selector(store.get()))

//     useEffect(() => {
//         const unsubscribe = store.subscribe(() => {
//             const value = selector(store.get())
//             setState(value)
//         })

//         return unsubscribe
//     }, [store, selector])

//     return state
// }