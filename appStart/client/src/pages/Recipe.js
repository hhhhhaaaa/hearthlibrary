import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import Container from "../components/Container/Container";

/**
 *
 */
function Recipe() {
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
        <Container>
          <ul>
            <li>
              <h2 className="textColor">Title</h2>
              <p className="textSubtle">{rec.title}</p>
            </li>
            <li>
              <h2 className="textColor">Picture</h2>
              <img src={`${rec.picture}.jpg`} />
            </li>
            <li>
              <h2 className="textColor">Description </h2>
              <p className="textSubtle">{rec.description}</p>
            </li>
            <li>
              <h2 className="textColor">Before You Begin</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={beforeMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Time</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={timMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Yield</h2>
              <p className="textSubtle">{rec.yields}</p>
            </li>
            <li>
              <h2 className="textColor">Ingredients</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={ingMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Steps</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={stepMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Notes</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={nottingMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Sources</h2>
              <div
                className="textSubtle"
                dangerouslySetInnerHTML={soreMark()}
              ></div>
            </li>
            <li>
              <h2 className="textColor">Category</h2>
              <p className="textSubtle">{rec.category}</p>
            </li>
          </ul>
        </Container>
      );
    }
  }

  return (
    <Container>
      <SVG />
    </Container>
  );
}
export default Recipe;
