import React from "react";
import { useState } from "react";

const HandleValue = () => {
  return (
    <Input
    //   render={(value) => <DisplayValue value={value}></DisplayValue>}
    >
      {(value) => <DisplayValue value={value} />}
    </Input>
  );
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center justify-center h-screen">
      <input
        type="text"
        value={value}
        className="border border-gray-500"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* {props.render(value)} */}
      {typeof props.children === "function" ? props.children(value) : null}
    </div>
  );
};

const DisplayValue = ({ value }) => {
  return <div>{value}</div>;
};

export default HandleValue;
