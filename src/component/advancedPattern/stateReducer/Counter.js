import React from "react";
import Count from "./Count";
import { CounterProvider } from "./counter-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({
  count = 0,
  handleIncrement = () => {},
  handleDecrement = () => {},
}) => {
  return (
    <CounterProvider value={{ count }}>
      <div className="decrement max-w-[200px] mx-auto flex my-5 rounded-lg border border-gray-300 overflow-hidden text-white">
        <Decrement onClick={handleDecrement}></Decrement>
        <Count></Count>
        <Increment onClick={handleIncrement}></Increment>
      </div>
    </CounterProvider>
  );
};

export default Counter;
