import Fourth from "./Fourth"

interface IThirdProps {
    counter: number
}

const Third = ({ counter }: IThirdProps) => {
    return (
        <div className="flex space-x-2 border rounded-[8px] border-muted p-1">
            <span>{counter}</span>
            <Fourth />
        </div>
    )
}

export default Third