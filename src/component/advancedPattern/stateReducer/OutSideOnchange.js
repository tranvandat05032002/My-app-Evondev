import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const OutSideOnchange = () => {
  const useReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };

      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleIncrement, handleDecrement } = useCounter(
    {
      initialValue: 0,
    },
    useReducer
  );
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
