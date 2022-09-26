import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    console.log(timerRef.current);
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h3>Timer: {counter}s</h3>
      <div className="flex gap-x-5">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Counter;
