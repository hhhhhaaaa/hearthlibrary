import React from "react";
import PropTypes from "prop-types";

/**
<<<<<<< Updated upstream
 *
 */
// eslint-disable-next-line space-before-blocks
function Recipes(props) {
  return (
    <div>
      <h2> The Recipes we are serving today</h2>
      <ul>
        {props.recipe.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
=======
 * @param props
 * @param props.recipe
 */
// eslint-disable-next-line space-before-blocks
function Recipes({ recipe }) {
  return (
    <div>
      <h2> The Recipes we are serving today</h2>
      <ul>
        {recipe.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

Recipes.propTypes = {
  recipe: PropTypes.array
};

export default Recipes;
>>>>>>> Stashed changes
