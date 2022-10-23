import React from "react";
import { useCount } from "./counter-context";

const Count = () => {
  const { count } = useCount();
  return (
    <span className="flex items-center justify-center flex-1 text-3xl font-light text-gray-400 bg-teal-100">
      {count}
    </span>
  );
};

export default Count;
