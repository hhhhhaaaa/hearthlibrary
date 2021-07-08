import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container/Container";
import { Bars } from "svg-loaders-react";

/**
 *
 */
function Categories() {
  const recipe = useSelector((state) => state.recipe);

  if (recipe !== null && recipe.length >= 1) {
    return (
      <Container>
        <div>
          <h2 className="text-center"> The Recipe Categories</h2>
          <ol>
            <br />
            <li>
              <a className="textColor" href={`/categories/Appetizers`}>
                <span> Appetizers</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Beverages`}>
                <span>Beverages</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Bread`}>
                <span>Bread</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Casserole`}>
                <span>Casserole</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Dessert`}>
                <span>Dessert</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Entree`}>
                <span>Entree</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Meat`}>
                <span>Meat</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Miscellaneous`}>
                <span>Miscellaneous</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Poultry`}>
                <span>Poultry</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Salad`}>
                <span>Salad</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Seafood`}>
                <span>Seafood</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Sides`}>
                <span>Sides</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Soup`}>
                <span>Soup</span>
              </a>
            </li>
            <br />
            <li>
              <a className="textColor" href={`/categories/Veggies`}>
                <span>Veggies</span>
              </a>
            </li>
          </ol>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Bars />;
    </Container>
  );
}

export default Categories;
