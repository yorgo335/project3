import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    //I made it so the bar remains on top, and used the ({isActive}) so that we can differentiate between current tab and other tabs
    <nav className="sticky top-0 z-10">
      <ul className="flex items-center justify-center bg-[rgb(93,93,93)] text-white overflow-hidden list-none h-[46px]">
        <li className="navbarli">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "bg-primary designTab" : "designTab";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="navbarli">
          <NavLink
            to="/store"
            className={({ isActive }) => {
              return isActive ? "bg-primary designTab" : "designTab";
            }}
          >
            Store
          </NavLink>
        </li>
        <li className="navbarli">
          <NavLink
            to="/contactus"
            className={({ isActive }) => {
              return isActive ? "bg-primary designTab" : "designTab";
            }}
          >
            Contact Us
          </NavLink>
        </li>
        <li className="navbarli">
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "bg-primary designTab" : "designTab";
            }}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
