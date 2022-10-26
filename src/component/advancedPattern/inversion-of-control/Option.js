import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = useDropdown();
  return (
    <div
      className="flex items-center justify-between p-4 cursor-pointer option-item hover:bg-slate-200"
      onClick={() => onClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Option;
