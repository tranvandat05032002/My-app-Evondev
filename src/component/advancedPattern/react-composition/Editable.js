import React from "react";
import useToggle from "./customerHook/useToggle";

const Editable = () => {
  const { toggle: edit, handleToggle: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input
          type="text"
          name=""
          id=""
          className="px-4 py-1 border border-gray-300 rounded-lg"
        />
      )}
      <button
        onClick={handleToggleEdit}
        className="px-2 py-1 ml-4 text-white bg-blue-300 rounded-full cursor-pointer"
      >
        Toggle
      </button>
    </div>
  );
};

export default Editable;
