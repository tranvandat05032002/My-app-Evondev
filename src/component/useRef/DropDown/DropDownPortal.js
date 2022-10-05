import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const DropDownPortal = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const [coords, setCoords] = useState({});

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
  //handle
  const handleClick = (e) => {
    setCoords(dropdownRef.current.getBoundingClientRect());
    setShowDropDown(!showDropDown);
  };
  return (
    // <div className="p-5">
    <div className="relative w-full max-w-[400px] mt-3 ml-5" ref={dropdownRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer active"
        onClick={handleClick}
      >
        Selection
      </div>
      {showDropDown && <DropDownList coords={coords}></DropDownList>}
    </div>
    // </div>
  );
};

const DropDownList = ({ coords }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
      style={{
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
        left: coords.left,
      }}
    >
      <div className="p-5 cursor-pointer border-b-[1px] border-blue-300">
        Javascript
      </div>
      <div className="p-5 cursor-pointer border-b-[1px] border-blue-300">
        ReactJS
      </div>
      <div className="p-5 cursor-pointer ">VueJS</div>
    </div>,
    document.querySelector("body")
  );
};

export default DropDownPortal;
