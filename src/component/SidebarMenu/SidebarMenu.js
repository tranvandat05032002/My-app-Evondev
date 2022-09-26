import React from "react";
import { useState } from "react";
import useDropDown from "../hooks/useDropDown";
import ComponentSidebarMenu from "./ComponentSidebarMenu";

const SidebarMenu = () => {
  //   const [show, setShow] = useState(false);
  const { show, setShow, dropdownRef } = useDropDown("button");
  return (
    <div>
      <button
        className="px-5 py-3 bg-red-300 text-white rounded-lg ml-5 cursor-pointer"
        onClick={() => setShow(true)}
      >
        Show Menu
      </button>
      <ComponentSidebarMenu
        show={show}
        ref={dropdownRef}
      ></ComponentSidebarMenu>
    </div>
  );
};

export default SidebarMenu;
