import React from "react";
import PropTypes from "prop-types";

/**
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
