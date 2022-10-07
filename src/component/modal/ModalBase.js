import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, bodyClassName = "", children }) => {
  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            bodyStyles={{ transition: "all 250ms" }}
            contentClassName="flex items-center justify-center fixed inset-0 z-[9999]"
            bodyClassName={`relative z-10 content ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
