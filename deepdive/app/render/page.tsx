import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { JSX, SVGProps } from "react"
import First from "../components/render/First"
import Process from "../components/render/Process"

const Render = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Card className="w-full max-w-screen-lg flex items-center flex-col p-10">
                <CardHeader>
                    <CardTitle className="mb-2">React Rendering Process</CardTitle>
                    <CardDescription>
                        The Render Phase represents the reconciliation process where React updates the virtual DOM. <br /> The Commit Phase is where React applies the changes to the actual DOM.
                    </CardDescription>
                </CardHeader>
                <div className="flex flex-row items-center space-x-10 w-full">
                    <CardContent className="border rounded-[8px] border-primary p-3 w-[50%]">
                        <First />
                    </CardContent>
                    <CardContent className="w-[50%]">
                        <Process />
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}


export default Render