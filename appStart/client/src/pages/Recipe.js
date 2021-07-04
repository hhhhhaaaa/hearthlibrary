import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Bars } from "svg-loaders-react";

/**
 *
 */
function Recipes() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];
  const { title } = useParams();
  let recipeMatch = false;
  let recipeFix = [];

  if (recipe !== null && recipe.length >= 1) {
    recipeArray.map((individualRecipe) => {
      if (individualRecipe.title === title) {
        recipeMatch = true;

        return (recipeFix = individualRecipe);
      }

      return null;
    });
    if (recipeMatch) {
      // eslint-disable-next-line prefer-destructuring
      const rec = recipeFix;

      const beforeMark = () => {
        return { __html: rec.beforeyoubegin };
      };

      const timMark = () => {
        return { __html: rec.time };
      };

      const ingMark = () => {
        return { __html: rec.ingredients };
      };

      const stepMark = () => {
        return { __html: rec.steps };
      };

      const nottingMark = () => {
        return { __html: rec.notes };
      };

      const soreMark = () => {
        return { __html: rec.sources };
      };

      return (
        <div>
          <ul>
            <li>
              <h2>Title</h2>
              <p>{rec.title}</p>
            </li>
            <li>
              <h2>Description </h2>
              <p>{rec.description}</p>
            </li>
            <li>
              <h2>Before You Begin</h2>
              <div dangerouslySetInnerHTML={beforeMark()}></div>
            </li>
            <li>
              <h2>Time</h2>
              <div dangerouslySetInnerHTML={timMark()}></div>
            </li>
            <li>
              <h2>Yield</h2>
              <p>{rec.yields}</p>
            </li>
            <li>
              <h2>Ingredients</h2>
              <div dangerouslySetInnerHTML={ingMark()}></div>
            </li>
            <li>
              <h2>Steps</h2>
              <div dangerouslySetInnerHTML={stepMark()}></div>
            </li>
            <li>
              <h2>Notes</h2>
              <div dangerouslySetInnerHTML={nottingMark()}></div>
            </li>
            <li>
              <h2>Sources</h2>
              <div dangerouslySetInnerHTML={soreMark()}></div>
            </li>
            <li>
              <h2>Category</h2>
              <p>{rec.category}</p>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div>
      <Bars />;
    </div>
  );
}
export default Recipes;
