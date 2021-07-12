import React from "react";
import PropTypes from "prop-types";
import "./Container.css";

/**
 * @param props
 * @param props.fluid
 * @param props.children
 */
function Container({ fluid, children }) {
  // eslint-disable-next-line semi
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

Container.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.any
};

export default Container;
