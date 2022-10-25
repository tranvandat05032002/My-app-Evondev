import React from "react";
import { useState } from "react";

const DropDown = ({
  options,
  placeholder = "Please select an options",
  inputPlaceholder,
  visibleIconChecked = false,
  visibleSearch = false,
  onChange = () => {},
}) => {
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
        {placeholder}
      </div>
      {show && (
        <div className="border border-gray-300 rounded option">
          {visibleSearch && (
            <div className="p-1">
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="w-full px-2 py-3 border border-gray-300 outline-none "
                onChange={onChange}
              />
            </div>
          )}
          {options &&
            options.length > 0 &&
            options.map((options) => (
              <div
                key={options.title}
                className="flex items-center justify-between p-4 cursor-pointer option-item hover:bg-slate-200"
                onClick={options.onClick}
              >
                {options.title}
                {visibleIconChecked && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
