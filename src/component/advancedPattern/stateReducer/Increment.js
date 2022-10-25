import React from "react";

const Increment = ({ onClick, ...props }) => {
  console.log(
    "🚀 ~ file: Increment.js ~ line 4 ~ Increment ~ onClick",
    onClick
  );
  return (
    <button
      onClick={onClick}
      {...props}
      className="flex items-center justify-center px-3 text-3xl cursor-pointer increment bg-slate-400"
    >
      +
    </button>
  );
};

export default Increment;
