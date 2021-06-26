import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.fluid
 * @param props.children
 */
function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

Row.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.element
};

export default Row;
