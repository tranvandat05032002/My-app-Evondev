import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const TooltipAdvanced = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div>
      <CSSTransition in={visible} unmountOnExit classNames="fade" timeout={300}>
        {(status) => (
          <Portal visible={status !== "exited"} overlay={false}>
            <p
              className="absolute inline-block p-3 text-white -translate-y-full transition-all bg-black rounded-lg max-w-[250px] tooltip z-[9999]"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left - coords.width / 2,
                // left: coords.left - coords.width / 2,
                // top: coords.top - coords.height / 4,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>

      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
