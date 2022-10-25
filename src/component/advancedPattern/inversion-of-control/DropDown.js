import React from "react";
import { useState } from "react";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const handleToggleDropDown = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
        onClick={handleToggleDropDown}
      >
        Please select an option
      </div>
      {show && (
        <div className="border border-gray-300 rounded option">
          <div className="p-4 cursor-pointer option-item hover:bg-slate-200">
            Front-End
          </div>
          <div className="p-4 cursor-pointer option-item hover:bg-slate-200">
            Back-End
          </div>
          <div className="p-4 cursor-pointer option-item hover:bg-slate-200">
            Fullstack
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
