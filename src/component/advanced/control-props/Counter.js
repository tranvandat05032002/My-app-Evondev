import React from "react";
import { useState } from "react";
import Count from "./Count";
import { CounterProvider } from "./counter-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const handleChangeValue = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleChangeValue(getCount() + 1);
  };
  const handleDecrement = () => {
    handleChangeValue(getCount() - 1);
  };
  return (
    <CounterProvider
      value={{ handleIncrement, handleDecrement, count: getCount() }}
    >
      <div className="decrement max-w-[200px] mx-auto flex my-5 rounded-lg border border-gray-300 overflow-hidden text-white">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CounterProvider>
  );
};

export default Counter;
