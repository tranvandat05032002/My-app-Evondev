import React from "react";
import { useState } from "react";
import Switch from "./Switch";

function useToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);
  return {
    on,
    toggle,
    toggleProps: {
      onClick: toggle,
    },
  };
}

const SwitchRender = () => {
  const { on, toggleProps } = useToggle();
  return (
    <div>
      {/* <Switch on={on} onClick={toggleProps.onClick}></Switch> */}
      <Switch on={on} {...toggleProps}></Switch>
      <hr />
      <button aria-label="custom-button" {...toggleProps}>
        {on ? "On" : "Off"}
      </button>
    </div>
  );
};

export default SwitchRender;
