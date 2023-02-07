import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/currencies">
        <button>Currencies</button>
      </Link>
    </nav>
  );
};

export default Nav;
