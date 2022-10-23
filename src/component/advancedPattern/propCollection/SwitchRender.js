import React from "react";
import { useState } from "react";
import Switch from "./Switch";

function useToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest }) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  return {
    on,
    toggle,
    getToggleProps,
    // toggleProps: {
    //   onClick: toggle,
    // },
    //Props getter
  };
}

const SwitchRender = () => {
  const { on, getToggleProps } = useToggle();
  return (
    <div>
      {/* <Switch on={on} onClick={toggleProps.onClick}></Switch> */}
      {/* <Switch on={on} {...toggleProps}></Switch> */}
      <Switch {...getToggleProps({ on })}></Switch>
      <hr />
      <button
        aria-label="custom-button"
        {...getToggleProps({ onClick: () => console.log("onButtonClicked") })}
      >
        {on ? "On" : "Off"}
      </button>
    </div>
  );
};

export default SwitchRender;
