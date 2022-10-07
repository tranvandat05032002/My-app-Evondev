import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function createElementPortal() {
  const Element = document.createElement("div");
  Element.id = "portal-wrapper";
  return Element;
}

const portalWrapperElement = createElementPortal();

const Portal = ({
  contentClassName = "",
  containerStyles = {},
  bodyClassName = "",
  bodyStyles = {},
  overlay = true,
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElement);
  }, []);
  const renderContent = (
    <div className={contentClassName} style={containerStyles}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyles}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElement);
};

Portal.propTypes = {
  contentClassName: PropTypes.string,
  containerStyles: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyles: PropTypes.object,
  overlay: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Portal;
