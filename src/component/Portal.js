import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function createElementPortal() {
  const Element = document.createElement("div");
  Element.id = "portal-wrapper";
  return Element;
}

const portalWrapperElement = createElementPortal();

const Portal = ({
  contentClassName = "",
  bodyClassName = "",
  visible = true,
  handleClose = () => {},
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElement);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 ${contentClassName}`}
      style={{ zIndex: "9999" }}
    >
      <div className="absolute inset-0 bg-black overlay bg-opacity-20">
        <div
          className={`relative z-10 ${bodyClassName} ${
            visible ? "" : "opacity-0 invisible"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolores.
          Tempora veritatis neque numquam impedit eligendi dignissimos, sit
          deleniti temporibus itaque voluptatem. Quod suscipit nisi ipsa
          voluptatum mollitia maxime at.
        </div>
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElement);
};

export default Portal;
