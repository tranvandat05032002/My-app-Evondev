import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  //   const [textareaParentHeight, setTextareaParentHeight] = useState("auto");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const handleChange = (event) => {
    setTextareaHeight("auto");
    // setTextareaParentHeight("auto");
    setText(event.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setTextareaParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-4"
      //   style={{
      //     height: textareaParentHeight,
      //   }}
    >
      <textarea
        className="w-full max-w-[400px] outline-none border border-gray-400 p-4 rounded-lg overflow-hidden focus:border-red-400 focus:border-2 transition-all resize-none leading-normal"
        value={text}
        placeholder="Please enter your content..."
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
