import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/pictures">Pictures</Link>
          </li>
          <li>
            {" "}
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
