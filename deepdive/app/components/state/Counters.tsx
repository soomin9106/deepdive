'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createStore, useStore, useStoreSelector } from "@/lib/counter";
import { SmilePlus, UserPlus } from "lucide-react";
import { ChangeEvent, useCallback, useEffect } from "react";


// count 만 가지고 있는 스토어 구조
const store = createStore({ count: 0 })

export const NCounter1 = () => {
    const [state, setState] = useStore(store)

    const handleClick = () => {
        setState((prev) => ({ count: prev.count + 1 }))
    }
    return (
        <div className="flex justify-center items-center w-full flex-col space-y-10">
            <h1>Click Button to increase Count!!</h1>
            <div className="flex space-x-6 items-center">
                <Button size='icon' onClick={handleClick} variant="ghost">
                    <SmilePlus />
                </Button>
                <span className="text-[32px]">{state.count}</span>
            </div>
        </div>
    )
}

export const NCounter2 = () => {
    const [state, setState] = useStore(store)

    const handleClick = () => {
        setState((prev) => ({ count: prev.count + 1 }))
    }

    return (
        <div className="flex justify-center items-center w-full flex-col space-y-10">
            <h1>Click Button to increase Count!!</h1>
            <div className="flex space-x-6 items-center">
                <Button size='icon' onClick={handleClick} variant="ghost">
                    <UserPlus />
                </Button>
                <span className="text-[32px]">{state.count}</span>
            </div>
        </div>
    )
}

// Another Store (Object 형태의 스토어 구조)
const store2 = createStore({ count: 0, text: 'hi' })

export const NCounter3 = () => {
    const counter = useStoreSelector(
        store2, 
        useCallback((state) => state.count, []),
    )

    const handleClick = () => {
        store2.set((prev) => ({ ...prev, count: prev.count + 1 }))
    }


    return (
        <div className="flex justify-center items-center w-full flex-col space-y-10">
            <h1>Click Button to increase Count!!</h1>
            <div className="flex space-x-6 items-center">
                <Button size='icon' onClick={handleClick} variant="ghost">
                    <UserPlus />
                </Button>
                <span className="text-[32px]">{counter}</span>
            </div>
        </div>
    )

}

const textSelector = (state: ReturnType<typeof store2.get>) => state.text

export const TextEditor = () => {
    const text = useStoreSelector(
        store2, 
        textSelector
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        store2.set((prev) => ({ ...prev, text: e.target.value }))
    }

    return (
        <div className="flex justify-center items-center w-full flex-col space-y-10">
            <h1>Change Text</h1>
            <Input value={text} onChange={handleChange} />
        </div>
    )
}