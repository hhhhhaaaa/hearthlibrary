/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Card from "../components/Card/Card";
import image1 from "./image1.jpg";
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
                <h4 className="card-title text-center">Random Recipe!</h4>
                <h1 className="text-center">{crazyRandomRecipe.title}</h1>
                <p className="card-text py-5">
                  {crazyRandomRecipe.description}
                </p>
              </div>
            </div>
          </Col>
          <Col size="md-6">
            <div className="card">
              <div className="img-container">
                <img src={image1} className="img-fluid image-resize"></img>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <h4 className="py-2 text-center"> Recent Recipes List</h4>
            <ul>
              {recentRecipesArray.map((item, index) => (
                <div key={index}>
                  <li>
                    <Link
                      to={`/recipes/${item.title}`}
                      className="button muted-button"
                    >
                      {item.title}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <SVG />
    </div>
  );
}
