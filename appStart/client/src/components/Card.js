import React from "react";
import { PropTypes } from "prop-types";

/**
 * @param props
 * @param props.popular
 * @param props.children
 */
function Card({ popular, children }) {
  return (
    <div className="card text-center">
      <div className="card-header">
<<<<<<< Updated upstream:appStart/client/src/components/Card.js
        <h2>{props.heading}</h2>
=======
        <h2>{popular}</h2>
>>>>>>> Stashed changes:appStart/client/src/components/Card/Card.js
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

Card.propTypes = {
  popular: PropTypes.string,
  children: PropTypes.element
};

export default Card;
