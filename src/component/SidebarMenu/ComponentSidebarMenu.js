import React from "react";

const ComponentSidebarMenu = React.forwardRef(({ show }, ref) => {
  return (
    <div
      className={`w-[300px] h-full fixed bg-gray-300 top-0 left-0 z-10 transition-all  ${
        show ? "" : "-translate-x-full"
      }`}
      ref={ref}
    ></div>
  );
});

export default ComponentSidebarMenu;
