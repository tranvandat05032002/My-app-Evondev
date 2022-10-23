import React from "react";
import { useCount } from "./counter-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      onClick={handleDecrement}
      className="flex items-center justify-center px-3 text-3xl cursor-pointer bg-slate-400"
    >
      -
    </button>
  );
};

export default Decrement;
