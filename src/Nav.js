import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/home",
    title: "Home",
  },
  {
    id: 2,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 3,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact",
  },
];

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5 shadow-sm gap-x-10">
        {ListLink.length > 0 &&
          ListLink.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              {item.title}
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
