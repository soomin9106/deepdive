'use client'
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import React, { useState } from 'react';

const Async = () => {
    const [synchronous, setSynchronous] = useState<number>(0);
    const [macro, setMacro] = useState<number>(0);
    const [micro, setMicro] = useState<number>(0);

    const reset = () => {
        setSynchronous(0);
        setMacro(0);
        setMicro(0);
    };

    const heavyTask = (setFunc: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }, iter: number) => {
        for (let i = 1; i <= iter; i++) {
            setFunc(i);
        }
    };

    const run = () => {
        // Asynchronous macro task
        setTimeout(() => {
            heavyTask(setMacro, 300000);
            console.log('macro task end');
        });

        // Synchronous task
        heavyTask(setSynchronous, 100000);
        console.log('synchronous task end');

        // Asynchronous micro task
        queueMicrotask(() => {
            heavyTask(setMicro, 200000);
            console.log('micro task end');
        });
    };

    return (
        <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='text-[24px]'>Sync Code : <span>{synchronous}</span></div>
            <div className='text-[24px]'>Macro : <span>{macro}</span></div>
            <div className='text-[24px]'>Micro : <span>{micro}</span></div>
            <div className='flex space-x-2 mt-5'>
                <Button onClick={run}>Run</Button>
                <Button onClick={reset}>Reset</Button>
            </div>
            <div className="flex flex-col w-[50%] ">
                <div className="flex items-center p-2 border-b">
                    <FileIcon className="w-4 h-4" />
                    <span className="mx-2">Run Code</span>
                </div>
                <div className="flex-1">
                    <pre className="w-full p-2 text-sm bg-gray-900 shiki-dark rounded-t-lg">
                        <code className="text-gray-100">
                            {`
                                // Asynchronous macro task
                                setTimeout(() => {
                                    heavyTask(setMacro, 300000);
                                    console.log('macro task end');
                                });

                                // Synchronous task
                                heavyTask(setSynchronous, 100000);
                                console.log('synchronous task end');

                                // Asynchronous micro task
                                queueMicrotask(() => {
                                    heavyTask(setMicro, 200000);
                                    console.log('micro task end');
                                });
                            `}
                        </code>
                    </pre>
                </div>
            </div>
            <div className='flex flex-col space-y-3 mt-10 items-center'>
                <h1 className='text-[24px]'>Order</h1>
                <div className='flex flex-row space-x-2'>
                    <span>Sync</span>
                    <MoveRight />
                    <span>Micro</span>
                    <MoveRight />
                    <span>Macro</span>
                </div>
            </div>
        </div>
    );
}

export default Async

function FileIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    )
}
