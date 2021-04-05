import React, { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="myNav">
      <span className="brand">Movies DB Search</span>

      <ul className="nav-links">
        <li>
          <Link to="/WatchList">image</Link>
        </li>
        <li>
          <Link to="/Watched">movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
