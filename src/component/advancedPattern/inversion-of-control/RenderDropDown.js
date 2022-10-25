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
  return <DropDown placeholder="Select an options"></DropDown>;
};

export default RenderDropDown;
