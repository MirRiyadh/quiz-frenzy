import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../Photos/logo.png";

const Header = () => {
  return (
    <div className="header md:flex justify-around items-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div>
        <Link to="/">
          <img className="w-56 m-auto" src={logo} alt="" />{" "}
        </Link>{" "}
      </div>
      <div className="text-white font-bold">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/topics"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Topics
        </NavLink>
        <NavLink
          to="/statics"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Statics
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
