import React from "react";
import { useState } from "react";
import Counter from "./Counter";

const OutSideOnchange = () => {
  const [clientCount, setClientCount] = useState(5);
  const handleOnchangeActionClient = (newValue) => {
    setClientCount(newValue);
  };
  return (
    <div>
      <Counter
        value={clientCount}
        onChange={handleOnchangeActionClient}
      ></Counter>
    </div>
  );
};

export default OutSideOnchange;
