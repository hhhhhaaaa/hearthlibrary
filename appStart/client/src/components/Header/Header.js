/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

// eslint-disable-next-line init-declarations

/**
 *
 */
function Header() {
  const location = useLocation();

  // eslint-disable-next-line keyword-spacing

  return (
    <div className="borderBottom">
      <h1>
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "nav-link active page-title"
              : "nav-link page-title"
          }
        >
          Hearth Library
        </Link>
      </h1>
    </div>
  );
}

export default Header;
