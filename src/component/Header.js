import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY < 100) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleFixedHeader);

    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return (
    <div>
      <p className="bg-black text-white" id="header">
        Header
      </p>
    </div>
  );
};

export default Header;
