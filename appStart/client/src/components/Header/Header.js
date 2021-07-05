/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line init-declarations

/**
 *
 */
function Header() {
  const location = useLocation();

  // eslint-disable-next-line keyword-spacing

  return (
    <div className="App-header ">
      <h1>
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Hearth Library
        </Link>
      </h1>
    </div>
  );
}

export default Header;
