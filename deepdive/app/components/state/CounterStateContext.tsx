import { CounterStore, CounterStoreContext, Store, createStore } from "@/lib/counter"
import { PropsWithChildren, useRef } from "react"

export const CounterStoreProvider = ({
    initialState,
    children
}: PropsWithChildren<{
    initialState: CounterStore
}>) => {
    const storeRef = useRef<Store<CounterStore>>()

    if (!storeRef.current) {
        storeRef.current = createStore<CounterStore>(initialState)
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
         {children}
        </CounterStoreContext.Provider>
    )
}