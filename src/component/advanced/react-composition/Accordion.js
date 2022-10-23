import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./customerHook/useToggle";

const Accordion = ({ header, children }) => {
  const { toggle: show, handleToggle: handleToggleShow } = useToggle();
  return (
    <div className="w-full my-3 ">
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
