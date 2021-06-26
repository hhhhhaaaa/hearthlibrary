import React from "react";

/**
 * @param props
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

export default Recipes;
