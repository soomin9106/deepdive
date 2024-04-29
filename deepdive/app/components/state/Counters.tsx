'use client'
import { Button } from "@/components/ui/button";
import { createStore, useStore } from "@/lib/counter";
import { SmilePlus, UserPlus } from "lucide-react";

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