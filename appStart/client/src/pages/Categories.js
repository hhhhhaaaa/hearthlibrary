import React from "react";
import { useSelector } from "react-redux";

/**
 *
 */
function Categories() {
  const recipe = useSelector((state) => state.recipe);

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

export default Categories;
