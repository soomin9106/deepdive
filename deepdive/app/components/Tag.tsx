interface ITagProps {
    name: string
    url:string
}

const Tag = ({name, url}: ITagProps) => {
    return (
        <button className="rounded-lg bg-white p-5 shadow-lg">
            <span className="text-[20px] font-bold text-black"># {name}</span>
        </button>
    )
}

export default Tag