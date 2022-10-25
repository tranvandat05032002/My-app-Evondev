import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const OutSideOnchange = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
};

export default OutSideOnchange;
