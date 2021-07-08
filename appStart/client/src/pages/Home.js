/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import SVG from "../components/SVG/SVG";

/**
 *
 */
export default function Home() {
  const recipe = useSelector((state) => state.recipe);

  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];

  // eslint-disable-next-line no-unreachable-loop
  while (recipe !== null && recipe.length >= 1) {
    const crazyRandomRecipe =
      recipeArray[Math.floor(Math.random() * recipeArray.length)];

    const recentRecipesArray = recipeArray.slice(
      Math.max(recipeArray.length - 5, 0)
    );

    return (
      <Container>
        <Row>
          <Col size="md-6">
            <div>
              <div className="card-body">
                <h4 className="text-center textSubtle">Random Recipe!</h4>
                <h1>
                  <Link
                    className="textColor"
                    to={`/recipes/${crazyRandomRecipe.title}`}
                  >
                    {crazyRandomRecipe.title}
                  </Link>
                </h1>
                <p className="card-text textSubtle py-5">
                  {crazyRandomRecipe.description}
                </p>
              </div>
            </div>
          </Col>
          <Col size="md-6">
            <div className="card">
              <div className="img-container">
                <img
                  src={`${crazyRandomRecipe.picture}.jpg`}
                  className="img-fluid image-resize"
                ></img>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <h4 className=" text-center textSubtle"> Recent Recipes List</h4>
            <ul>
              {recentRecipesArray.map((item, index) => (
                <div key={index}>
                  <li>
                    <Link className="textColor" to={`/recipes/${item.title}`}>
                      {item.title}
                    </Link>
                  </li>
                  <br />
                </div>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <SVG />
    </Container>
  );
}
