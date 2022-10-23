import React from "react";
import Count from "./Count";
import { CounterProvider } from "./counter-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = () => {
  return (
    <CounterProvider>
      <div className="decrement max-w-[200px] mx-auto flex my-5 rounded-lg border border-gray-300 overflow-hidden text-white">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CounterProvider>
  );
};

export default Counter;
