import React from "react";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <Portal
        visible={visible}
        onClose={onClose}
        contentClassName="flex items-center justify-center "
      >
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
