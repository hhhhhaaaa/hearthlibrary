import React from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line space-before-blocks
/**
 *
 */
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar  navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            to="/categories"
            className={
              location.pathname === "/categories"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Categories
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            to="/recipes"
            className={
              location.pathname === "/recipes" ? "nav-link active" : "nav-link"
            }
          >
            Recipes
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            to="/search"
            className={
              location.pathname === "/search" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
