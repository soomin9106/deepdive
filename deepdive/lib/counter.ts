import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { useSubscription } from "use-subscription";

export type CState = { counter: number }
// export type Value = { text: string }

// declare state outside component
let state: CState = {
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
export type Store<CState> = {
    get: () => CState
    set: (action: Initializer<CState>) => CState
    subscribe: (callback: () => void) => () => void
}

// create Store
// CState extends unknown => 타입의 유연성을 허용하기 위해
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

export const useStoreSelector = <CState extends unknown, Value extends unknown>(
    store: Store<CState>,
    selector: (state: CState) => Value
) => {
    const [state, setState] = useState(() => selector(store.get()))

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const value = selector(store.get())
            setState(value)
        })

        return unsubscribe
    }, [store, selector])

    return state
}

// Context 이용
export type CounterStore = {
    count: number
    text: string
}

// useSubscription 사용하는 코드 => Not working
// export const useCounterContextSelector = <CState extends unknown>(
//     selector: (state: CounterStore) => CState
// ) => {
//     const store = useContext(CounterStoreContext);
//     const subscription = useSubscription(
//         useMemo(
//             () => ({
//                 getCurrentValue: () => selector(store.get()),
//                 subscribe: store.subscribe,
//             }),
//             [store, selector]
//         )
//     );

//     return [subscription, store.set] as const;

// };

// createContext에서 생성된 타입을 CounterStore로 정의
export const CounterStoreContext = createContext<Store<CounterStore>>(
    createStore<CounterStore>({ count: 0, text: 'hello' })
);

// CounterStoreContext를 사용하여 상태를 선택하는 훅
export const useCounterContextSelector = <CState extends unknown, Value extends unknown>(
    selector: (state: CounterStore) => Value
) => {
    const store = useContext(CounterStoreContext);
    const state = useStoreSelector(store, selector);
    return [state, store.set] as const;
};