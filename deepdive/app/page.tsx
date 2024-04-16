'use client'
import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const initialText = "Let's figure out how FRONT-END works!"
  const [displayText, setDisplayText] = useState<string>("")
  const [index, setIndex] = useState<number>(0)

  // typing effect 
  useEffect(() => {
    const intervalId = setInterval(() => {
      // add one word
      setDisplayText(prevText => prevText + initialText[index]);

      // remove interval
      if (index === initialText.length - 1) {
        clearInterval(intervalId)
        setIndex(-1)
        setDisplayText("")
      }

      // increase index
      setIndex(prevIndex => prevIndex + 1);
    }, 200);

    // clean up
    return () => clearInterval(intervalId);
  }, [index])


  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className='flex space-x-2 flex-wrap'>
        <h1 className='font-bold text-[70px]'>{displayText}</h1>
        <span className='animate-blink text-[70px]'>|</span>
      </div>
    </div>
  );
}
