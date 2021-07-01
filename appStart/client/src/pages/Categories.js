import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.recipe
 */
function Categories({ recipe }) {
  return (
    <div>
      <h2> The categories</h2>
      <ul>
        {recipe.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item.category}</li>
        ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  recipe: PropTypes.array
};

export default Categories;
