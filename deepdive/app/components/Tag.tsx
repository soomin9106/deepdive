"use client"
import { useRouter } from "next/navigation"

interface ITagProps {
    name: string
    url:string
}

const Tag = ({name, url}: ITagProps) => {
    const router = useRouter()
    return (
        <button className="rounded-lg bg-white p-5 shadow-lg" onClick={() => router.push(url)}>
            <span className="text-[20px] font-bold text-black"># {name}</span>
        </button>
    )
}

export default Tag