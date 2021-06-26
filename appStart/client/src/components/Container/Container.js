import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.fluid
 * @param props.children
 */
function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

Container.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.element
};

export default Container;
