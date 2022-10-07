import React from "react";
import ModalBase from "./ModalBase";

const ModalAdvanced = ({ heading, children, ...props }) => {
  return (
    <ModalBase {...props}>
      {heading}
      {children}
    </ModalBase>
  );
};

export default ModalAdvanced;
