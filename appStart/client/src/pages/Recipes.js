import React from "react";
import { useSelector } from "react-redux";
import SVG from "../components/SVG/SVG";
import Container from "../components/Container/Container";

/**
 *
 */
function Recipes() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];

  if (recipe !== null && recipe.length >= 1) {
    return (
      <Container>
        <h2 className="text-center py-5 textColor">
          {" "}
          The Recipes we are serving today
        </h2>
        <ul>
          {recipeArray.map((item, index) => (
            <li key={index}>
              <br />
              <a className="textColor" href={`/recipes/${item.title}`}>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    );
  }

  return (
    <Container>
      <SVG />
    </Container>
  );
}
export default Recipes;
