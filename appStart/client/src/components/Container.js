import React from "react";

/**
 * @param props
 */
function Container(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;
