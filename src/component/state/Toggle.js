import "./ToggleStyle.css";

import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((prevState) => !prevState);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={handleToggle}
        ></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          on
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          off
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;
