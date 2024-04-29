import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Counter1 from "../components/state/Counter1"
import Counter2 from "../components/state/Counter2"
import { NCounter1, NCounter2 } from "../components/state/Counters"

const State = () => {
    return (

        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Card className="w-full max-w-screen-lg flex items-center flex-col p-10">
                <CardHeader>
                    <CardTitle className="mb-2">Implement React State Management</CardTitle>
                    <CardDescription>
                        Implement state management functionality that manages the state value outside the component, allows sharing it among multiple components, <br /> enables components using the external state to detect state changes, and ensures that they can be re-rendered whenever the state changes.
                    </CardDescription>
                </CardHeader>
                <div className="flex flex-row items-center space-x-10 w-full">
                    <CardContent className="w-[50%]">
                        <NCounter1 />
                    </CardContent>
                    <CardContent className="w-[50%]">
                        <NCounter2 />
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default State