import React, { Fragment, useState } from "react";
import useHover from "../hooks/useHover";
import ReactDOM from "react-dom";
import { useRef } from "react";
// import useHover from "../hooks/useHover";

const Tooltip = ({ text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleMouseOver = () => {
    setCoords(nodeRef.current.getBoundingClientRect());
  };
  return (
    <Fragment>
      <div
        className="absolute top-2/4 left-2/4"
        ref={nodeRef}
        onMouseOver={handleMouseOver}
      >
        <p className="text-lg font-semibold cursor-pointer">{text}</p>
      </div>
      {hovered && (
        <TooltipShow coords={coords}>Lorem dolor sit amet</TooltipShow>
      )}
    </Fragment>
  );
};

const TooltipShow = ({ coords, children }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-lg max-w-[250px]"
      style={{
        left: coords.left - coords.width / 2 + window.scrollY,
        top: coords.top - coords.height / 4 + window.scrollX,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};

export default Tooltip;
