import React from "react";
import { DropDownProvider } from "./dropdown-context";

const DropDown = ({
  placeholder = "Please select an options",
  children,
  show,
  setShow,
  ...props
}) => {
  const handleToggleDropDown = () => {
    setShow(!show);
  };
  return (
    <DropDownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
          onClick={handleToggleDropDown}
        >
          {placeholder}
        </div>
      </div>
      {show && children}
    </DropDownProvider>
  );
};

export default DropDown;
