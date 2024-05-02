'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Counter1 from "../components/state/Counter1"
import Counter2 from "../components/state/Counter2"
import { ContextCounter, ContextTextEditor, NCounter1, NCounter2, NCounter3, TextEditor } from "../components/state/Counters"
import { CounterStoreProvider } from "../components/state/CounterStateContext"

const ContextState = () => {
    return (

        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Card className="w-full max-w-screen-lg flex items-center flex-col p-10">
                <CardHeader>
                    <CardTitle className="mb-2">Implement React State Management w. Context</CardTitle>
                    <CardDescription>
                        Injecting Store in Children components by using Context
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col space-y-10">
                        <CounterStoreProvider initialState={{
                            count: 10,
                            text: "hello"
                        }}>
                            <div className="flex space-x-10">
                                <ContextCounter />
                                <ContextTextEditor />
                            </div>
                            <div className="w-full border-[1px] border-black my-5"></div>
                            <CounterStoreProvider initialState={{
                                count: 20,
                                text: "welcome"
                            }}>
                                <div className="flex space-x-10">
                                    <ContextCounter />
                                    <ContextTextEditor />
                                </div>
                            </CounterStoreProvider>
                        </CounterStoreProvider>
                    </CardContent>
            </Card>
        </div>
    )
}

export default ContextState