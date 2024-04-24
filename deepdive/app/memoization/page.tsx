'use client'
import { Button } from "@/components/ui/button"
import { SmilePlus } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

const useMath = (number: number) => {
    const [double, setDouble] = useState(0)

    useEffect(() => {
        setDouble(number * 2)
    }, [number])

    return useMemo(() => ({ double }), [double])
}

const Memoization = () => {
    const [counter, setCounter] = useState<number>(0)
    const value = useMath(10)

    useEffect(() => {
        console.log(value.double);

    }, [value])

    const handleClick = () => {
        setCounter((prev) => prev + 1)
    }

    return (
        <div className="flex justify-center items-center w-full h-screen flex-col space-y-10">
            <h1>Click Button to increase Count!!</h1>
            <div className="flex space-x-6 items-center">
                <Button size='icon' onClick={handleClick} variant="ghost">
                    <SmilePlus />
                </Button>
                <span className="text-[32px]">{counter}</span>
            </div>
        </div>
    )
}

export default Memoization