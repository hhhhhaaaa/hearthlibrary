import React from "react";
import PropTypes from "prop-types";

/* This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
   We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12" */

/**
 * @param props
 * @param props.size
 * @param props.children
 */
function Col({ size, children }) {
  const sizeCol = size
    .split(" ")
    .map((sizeEach) => `col-${sizeEach}`)
    .join(" ");

  return <div className={sizeCol}>{children}</div>;
}

Col.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string
};

export default Col;
