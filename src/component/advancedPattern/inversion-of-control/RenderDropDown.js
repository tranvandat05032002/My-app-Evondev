import React from "react";
import { useState } from "react";
import { DropDown } from "../inversion-of-control";

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
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  console.log(filter);
  const handleSelectJob = (newJob) => {
    setJob(newJob);
    setShow(false);
  };
  return (
    <DropDown
      placeholder={`${job || "Select an options"}`}
      onClick={handleSelectJob}
      show={show}
      setShow={setShow}
      onChange={(e) => setFilter(e.target.value)}
      inputPlaceholder="Search your jobs..."
    >
      <div className="border border-gray-300 rounded option max-w-[300px]">
        {options.length > 0 &&
          options.map((options) => (
            <DropDown.Option key={options.title}>
              <span>{options.title}</span>
              <DropDown.IconCheck></DropDown.IconCheck>
            </DropDown.Option>
          ))}
        <DropDown.Search></DropDown.Search>
      </div>
    </DropDown>
  );
};

export default RenderDropDown;
