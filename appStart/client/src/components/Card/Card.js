import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.popular
 * @param props.children
 */
function Card({ popular, children }) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{popular}</h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

Card.propTypes = {
  popular: PropTypes.string,
  children: PropTypes.object
};

export default Card;
