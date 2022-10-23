import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./customerHook/useToggle";

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="my-3 ">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
