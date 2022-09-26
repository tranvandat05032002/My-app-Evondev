import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Counter: ", count);
  }, [count]);

  const [info, setInfo] = useState({
    firstName: "tran",
    lastName: "Dat",
  });
  useEffect(() => {
    console.log("form input");
  }, [info.firstName]);
  return (
    <div className="flex pt-[10px] pl-[10px] gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => {
          setInfo({
            ...info,
            firstName: e.target.value,
          });
        }}
      />
      <div className="mr-4"> increment {count}</div>
      <button
        className="btn bg-blue-400 text-white px-7 py-2 "
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
};

export default Counter;
