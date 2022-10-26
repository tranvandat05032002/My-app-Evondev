import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count : {counter}</div>
      <div>{renderRef.current++}</div>
      <button
        className="px-3 py-2 mt-4 text-white bg-blue-400 rounded-full"
        onClick={() => setCounter((c) => c + 1)}
      >
        Click Click!
      </button>
    </div>
  );
};

export default React.memo(Counter);
