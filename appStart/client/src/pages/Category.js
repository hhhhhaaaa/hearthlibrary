import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";
import Container from "../components/Container/Container";

/**
 *
 */
function Recipe() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];
  const { category } = useParams();
  const categoryArray = [
    "Appetizers",
    "Beverages",
    "Bread",
    "Casserole",
    "Dessert",
    "Entree",
    "Meat",
    "Miscellaneous",
    "Poultry",
    "Salad",
    "Seafood",
    "Sides",
    "Soup",
    "Veggies"
  ];
  let recipeMatch = false;
  // eslint-disable-next-line no-unused-vars
  const recipeFix = [];

  if (recipe !== null && recipe.length >= 1) {
    if (categoryArray.includes(category)) {
      recipeArray.map((individualRecipe) => {
        if (individualRecipe.category === category) {
          recipeMatch = true;

          return recipeFix.push(individualRecipe);
        }

        return null;
      });
      if (recipeMatch) {
        // eslint-disable-next-line prefer-destructuring

        return (
          <Container>
            <div>
              <ul>
                <li>
                  <h1 className="textColor">{category}</h1>
                  <h2 className="textColor">Recipes</h2>
                  {recipeFix.map((result, index) => (
                    <div key={index}>
                      <li className="textSubtle">{result.title}</li>
                      <li className="textSubtle">{result.description}</li>
                      <li className="textSubtle">{result.Ingredients}</li>
                      <Link
                        to={`/recipes/${result.title}`}
                        className="textColor"
                      >
                        View Post
                      </Link>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </Container>
        );
      }
    }

    return <div>Incorrect Category</div>;
  }

  return (
    <Container>
      <SVG />
    </Container>
  );
}
export default Recipe;
