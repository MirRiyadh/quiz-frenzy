import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header md:flex justify-around items-center py-2 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div>
        <h1 className="text-2xl pb-3">Quiz phobia</h1>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statics">Statics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
