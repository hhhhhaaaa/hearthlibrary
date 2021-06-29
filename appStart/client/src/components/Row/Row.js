import React from "react";

/**
 * @param props
 */
function Row(props) {
  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  );
}

export default Row;
