import React from "react";
import { useCount } from "./counter-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      onClick={handleIncrement}
      className="flex items-center justify-center px-3 text-3xl cursor-pointer increment bg-slate-400"
    >
      +
    </button>
  );
};

export default Increment;
