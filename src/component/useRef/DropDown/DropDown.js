import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("click", handleClickDropdown);

    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return (
    <div className="p-5" ref={dropdownRef}>
      <div className="relative w-full max-w-[400px]">
        <div
          className="w-full border border-gray-200 p-5 rounded-lg cursor-pointer active"
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
        >
          Selection
        </div>
        {showDropDown && (
          <div className="absolute border border-gray-200 rounded-lg w-full bg-white left-0 top-full">
            <div className="p-5 cursor-pointer border-b-[1px] border-blue-300">
              Javascript
            </div>
            <div className="p-5 cursor-pointer border-b-[1px] border-blue-300">
              ReactJS
            </div>
            <div className="p-5 cursor-pointer ">VueJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
