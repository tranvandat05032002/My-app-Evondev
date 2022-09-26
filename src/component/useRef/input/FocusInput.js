import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    if (divRef.current) {
      divRef.current.style.backgroundColor = "gray";
    }

    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="input div" ref={divRef}>
      <input
        type="text"
        className=" border-blue-400 border-2"
        placeholder="Auto focus input"
        ref={inputRef}
      />
    </div>
  );
};

export default FocusInput;
