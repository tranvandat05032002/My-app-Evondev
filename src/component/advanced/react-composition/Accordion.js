import React from "react";
import { useState } from "react";
import useToggle from "./customerHook/useToggle";

const Accordion = () => {
  const { toggle: show, handleToggle: handleToggleShow } = useToggle();
  return (
    <div className="my-3">
      <div
        onClick={handleToggleShow}
        className="flex justify-between px-3 py-2 border border-gray-400 cursor-pointer header w-max"
      >
        Accordion header
        <span className="ml-3">{show ? "-" : "+"}</span>
      </div>
      {show && <div className="content">Accordion title</div>}
    </div>
  );
};

export default Accordion;
