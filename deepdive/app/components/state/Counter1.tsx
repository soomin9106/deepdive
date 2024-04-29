'use client'
import { Button } from "@/components/ui/button";
import { CState, getCounter, setCounter } from "@/lib/counter";
import { SmilePlus } from "lucide-react";
import { useState } from "react"

const currentState = getCounter();

const Counter1 = () => {
    const [localCnt, setLocalCnt] = useState(currentState)

    const handleClick = () => {
        setCounter((prev: CState) => {
            const newState = { counter: prev.counter + 1}
            setLocalCnt(newState)

            return newState
        })
    }
    return (
        <div className="flex justify-center items-center w-full flex-col space-y-10">
            <h1>Click Button to increase Count!!</h1>
            <div className="flex space-x-6 items-center">
                <Button size='icon' onClick={handleClick} variant="ghost">
                    <SmilePlus />
                </Button>
                <span className="text-[32px]">{localCnt.counter}</span>
            </div>
        </div>
    )
}

export default Counter1