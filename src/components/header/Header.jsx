import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row">
      <div></div>
      <div className="flex flex-row">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-amber-600" : "text-black"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-amber-600" : "text-black"}`
          }
        >
          About
        </NavLink>
      </div>
      <div className="flex flex-row"></div>
    </div>
  );
}

export default Header;
