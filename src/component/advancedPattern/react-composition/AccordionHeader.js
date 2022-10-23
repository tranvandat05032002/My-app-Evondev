import React from "react";
import { useAccordion } from "./accordion-context";

//specialized component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div
      onClick={handleToggleShow}
      className="flex items-center justify-between px-3 py-2 border border-gray-200 cursor-pointer header "
    >
      {children}
      <span className="ml-3">{show ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
