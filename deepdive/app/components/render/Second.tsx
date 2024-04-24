'use client'
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useState } from "react"
import Third from "./Third"

const Second = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleClickCounter = () => {
        setCounter((prev) => prev + 1)
    }

    return (
        <div className="border rounded-[8px] border-border p-1">
            <Button variant="ghost" className="flex flex-row space-x-1 justify-center" onClick={handleClickCounter}>
                <HeartIcon className="w-4 h-4" />
                <Third counter={counter} />
            </Button>
        </div>
    )
}

export default Second

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}