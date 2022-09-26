import React from "react";
import { useState } from "react";
import useHandleChange from "../hooks/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: "",
  });
  const [nameError, setNameError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName === "") {
      setNameError("Please enter at least one characters");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="flex gap-x-5">
          <div>
            <input
              className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
              placeholder="Enter your name"
              type="text"
              name="fullName"
              onChange={handleChange}
            />
            <p className="text-xs text-red-500">{nameError}</p>
          </div>

          <input
            className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white rounded-lg px-5 py-2"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
