import { createContext, useContext } from "react";
import useToggle from "./customerHook/useToggle";

const AccordionContext = createContext();
function AccordionProvider(props) {
  const { toggle: show, handleToggle: handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}
function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === "undefined")
    throw new Error("useAccordion must be used within AccordionProvide");
  return context;
}
export { AccordionProvider, useAccordion };
