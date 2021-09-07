import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import auth from "../../tools/auth";

import "./Navbar.scss";

// eslint-disable-next-line space-before-blocks
/**
 *
 */
const Navbar = () => {
  const authenticate = useSelector((state) => state.authenticate);

  const authenticated = authenticate.isAuthenticated;

  const signOut = useSignOut();

  console.log("Auth");
  console.log(authenticate);

  if (authenticate) {
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
          <br />
          <li className="nav-item">
            <Link to="/login" className="textColor">
              Login
            </Link>
          </li>
          <br />
          <li className="nav-item">
            <Link to="/signup" className="textColor">
              New Users
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                console.log("Test");
                signOut();
                auth.signout();
                location.replace("/logout");
                location.replace("/");
              }}
              className="textColor"
            >
              Logoff
            </button>
          </li>
        </ul>
      </nav>
    );
  }

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
          <Link to="/login" className="textColor">
            Login
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/signup" className="textColor">
            New Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
