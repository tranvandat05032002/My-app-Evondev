import React from "react";

//specialized component
const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div
      onClick={handleToggleShow}
      className="flex justify-between px-3 py-2 border border-gray-400 cursor-pointer header w-max"
    >
      {children}
      <span className="ml-3">{show ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
