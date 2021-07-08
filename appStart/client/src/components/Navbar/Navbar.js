import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// eslint-disable-next-line space-before-blocks
/**
 *
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light borderBottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="textColor">
            Home
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/about" className="textColor">
            About
          </Link>
        </li>
        <br />
        <li className="nav-item ">
          <Link to="/categories" className="textColor">
            Categories
          </Link>
        </li>
        <br />
        <li className="nav-item ">
          <Link to="/recipes" className="textColor">
            Recipes
          </Link>
        </li>
        <br />
        <li className="nav-item ">
          <Link to="/search" className="textColor">
            Search
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/newRecipe" className="textColor">
            New Recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
