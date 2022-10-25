import React from "react";
import DropDown from "./DropDown";

const options = [
  {
    title: "Front-End",
    onClick: () => {},
  },
  {
    title: "Back-End",
    onClick: () => {},
  },
  {
    title: "Fullstack",
    onClick: () => {},
  },
  {
    title: "Database",
    onClick: () => {},
  },
];

const RenderDropDown = () => {
  return (
    <DropDown
      options={options}
      placeholder="Select your job"
      inputPlaceholder={"Search your job"}
      visibleIconChecked={false}
      visibleSearch
      onChange
    ></DropDown>
  );
};

export default RenderDropDown;
