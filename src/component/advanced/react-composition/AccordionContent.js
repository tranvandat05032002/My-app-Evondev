import React from "react";

//specialized component
const AccordionContent = ({ show, children }) => {
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
