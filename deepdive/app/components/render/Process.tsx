const Process = () => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row space-x-1">
                <span className="text-primary text-[10px]">First</span>
                <span className="text-border text-[10px]">Second</span>
                <span className="text-muted text-[10px]">Third</span>
                <span className="text-destructive text-[10px]">Fourth</span>
            </div>
            <span>When Click Heart Icon...</span>
            <span>1. setState from Second component is called</span>
            <span>2. put Second's re-rendering process in queue</span>
            <span>3. inspect rendering path</span>
            <span>4. There is no changes in First component</span>
            <span>5. Re-render Second component</span>
            <span>6. In previous step, Second component returns Third component</span>
            <span>7. counter, Third component's props is updated. So, update Third component</span>
            <span>8. In previous step, Third component returns Fourth component</span>
            <span>9. There is no changes in Fourth component. However, since Third component is re-rendered, Fourth component should be re-rendered.
                <br/> (Fourth component is in Third component.)
            </span>
            <span>* Use memo to Fourth component prevent re-rendering.</span>
        </div>
    )
}

export default Process