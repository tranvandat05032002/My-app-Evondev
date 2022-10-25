import { createContext, useContext } from "react";

const DropdownContext = createContext();

const DropDownProvider = (props) => {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
};
const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === "undefined")
    throw new Error("useDropDown must be used within DropdownProvider");
  return context;
};

export { DropDownProvider, useDropdown };
