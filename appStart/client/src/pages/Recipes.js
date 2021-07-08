import React from "react";
import { useSelector } from "react-redux";
import SVG from "../components/SVG/SVG";

/**
 *
 */
function Recipes() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];

  if (recipe !== null && recipe.length >= 1) {
    return (
      <div className="menu">
        <h2 className="text-center py-5"> The Recipes we are serving today</h2>
        <ul>
          {recipeArray.map((item, index) => (
            <li key={index} className=" span" >
              <a href={`/recipes/${item.title}`}><span className=" span" >{item.title}</span></a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <SVG />
    </div>
  );
}
export default Recipes;
