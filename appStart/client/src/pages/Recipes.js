/* eslint-disable prefer-destructuring */
import React from "react";
import { useSelector } from "react-redux";
import SVG from "../components/SVG/SVG";
import Container from "../components/Container/Container";

/**
 *
 */
function Recipes() {
  const recipe = useSelector((state) => state.recipe);

  if (recipe !== null && recipe.length >= 1) {
    const recipeArray = [...recipe[0]];
    const fullRecipeArray = recipeArray;

    fullRecipeArray.sort((first, second) => {
      if (first.title < second.title) {
        return -1;
      }
      if (first.title > second.title) {
        return 1;
      }

      return 0;
    });

    return (
      <Container>
        <h2 className="text-center py-5 textColor">
          {" "}
          The Recipes we are serving today
        </h2>
        <ul>
          {fullRecipeArray.map((item, index) => (
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
