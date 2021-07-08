import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SVG from "../components/SVG/SVG";

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
          <div>
            <ul>
              <li>
                <h1>{category}</h1>
                <h2>Recipes</h2>
                {recipeFix.map((result, index) => (
                  <div key={index}>
                    <li>{result.title}</li>
                    <li>{result.description}</li>
                    <li>{result.Ingredients}</li>
                    <Link
                      to={`/recipes/${result.title}`}
                      className="button muted-button"
                    >
                      View Post
                    </Link>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        );
      }
    }

    return <div>Incorrect Category</div>;
  }

  return (
    <div>
      <SVG />
    </div>
  );
}
export default Recipe;
