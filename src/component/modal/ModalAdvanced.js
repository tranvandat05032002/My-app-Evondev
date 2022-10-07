import React from "react";
import ModalBase from "./ModalBase";

const ModalAdvanced = ({ heading, children, ...props }) => {
  return (
    <ModalBase {...props}>
      <h2 className="font-semibold text-[40px] text-center mb-5">{heading}</h2>
      <span
        className="absolute top-[5px] right-0 cursor-pointer w-[38px] h-[38px] bg-[#FFFFFF] flex items-center justify-center rounded-full p-1 -translate-y-2/4 translate-x-2/4 border border-gray-200"
        onClick={props.onClose}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
            fill="#84878B"
          />
        </svg>
      </span>
      {children}
    </ModalBase>
  );
};

export default ModalAdvanced;
