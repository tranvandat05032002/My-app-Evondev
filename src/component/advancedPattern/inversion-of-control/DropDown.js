import React from "react";
import { useState } from "react";
import { DropDownProvider } from "./dropdown-context";

const DropDown = ({
  options,
  placeholder = "Please select an options",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
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
      {children}
    </DropDownProvider>
  );
};

export default DropDown;
