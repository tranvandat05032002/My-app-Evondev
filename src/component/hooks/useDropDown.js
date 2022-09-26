import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
export default function useDropDown(tagName = "button") {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.matches(tagName)
      ) { 
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickDropdown);
    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return {
    show,
    setShow,
    dropdownRef,
  };
}
