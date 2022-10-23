import React from "react";
import { useAccordion } from "./accordion-context";

//specialized component
const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <div>
      {show && (
        <div className="p-4 mt-1 border border-gray-200 rounded-lg ">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionContent;
