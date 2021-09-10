import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SVG from "../../components/SVG/SVG";
import Container from "../../components/Container/Container";

import "./Recipe.scss";

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
        const ingredients = rec.ingredients.split("<br />");

        const ingredientsList = ingredients
          .map((item) => {
            return `<li>
          ${item}
          </li>`;
          })
          .join("");

        return { __html: ingredientsList };
      };

      const stepMark = () => {
        const steps = rec.steps.split("<br />");

        const stepsList = steps
          .map((item) => {
            return `<li>
          ${item}
          </li>`;
          })
          .join("");

        return { __html: stepsList };
      };

      const nottingMark = () => {
        return { __html: rec.notes };
      };

      const soreMark = () => {
        return { __html: rec.sources };
      };

      return (
        <Container className="row">
          <ul className="column">
            <li>
              <h2 className="textColor">Title</h2>
              <p className="textSubtle">{rec.title}</p>
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
              <h2 className="textColor">Ingredients</h2>
              <ul
                className="textSubtle"
                dangerouslySetInnerHTML={ingMark()}
              ></ul>
            </li>
            <li>
              <h2 className="textColor">Steps</h2>
              <ol
                className="textSubtle"
                dangerouslySetInnerHTML={stepMark()}
              ></ol>
            </li>
          </ul>
          <ul className="column">
            <li className="img-container">
              <h2 className="textColor">Picture</h2>
              <img
                className="img-fluid image-resize"
                src={`${rec.picture}.jpg`}
              />
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
