import React from "react";

const Decrement = ({ onClick, ...props }) => {
  console.log(onClick);
  return (
    <button
      className="flex items-center justify-center px-3 text-3xl cursor-pointer bg-slate-400"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
