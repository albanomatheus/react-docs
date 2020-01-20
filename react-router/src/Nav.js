import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const linkStyle = {
    color: "white"
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" style={linkStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={linkStyle}>
          <li>About</li>
        </Link>
        <Link to="/users" style={linkStyle}>
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
