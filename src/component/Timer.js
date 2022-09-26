import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("TranVanDat");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
