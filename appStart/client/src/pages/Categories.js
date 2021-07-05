import React from "react";
import { useSelector } from "react-redux";
import { Bars } from "svg-loaders-react";

/**
 *
 */
function Categories() {
  const recipe = useSelector((state) => state.recipe);

  if (recipe !== null && recipe.length >= 1) {
    return (
      <div>
        <h2> The Categories</h2>
        <ul>
          <li>
            <a href={`/categories/Appetizers`}>Appetizers</a>
          </li>
          <li>
            <a href={`/categories/Beverages`}>Beverages</a>
          </li>
          <li>
            <a href={`/categories/Bread`}>Bread</a>
          </li>
          <li>
            <a href={`/categories/Casserole`}>Casserole</a>
          </li>
          <li>
            <a href={`/categories/Dessert`}>Dessert</a>
          </li>
          <li>
            <a href={`/categories/Entree`}>Entree</a>
          </li>
          <li>
            <a href={`/categories/Meat`}>Meat</a>
          </li>
          <li>
            <a href={`/categories/Miscellaneous`}>Miscellaneous</a>
          </li>
          <li>
            <a href={`/categories/Poultry`}>Poultry</a>
          </li>
          <li>
            <a href={`/categories/Salad`}>Salad</a>
          </li>
          <li>
            <a href={`/categories/Seafood`}>Seafood</a>
          </li>
          <li>
            <a href={`/categories/Sides`}>Sides</a>
          </li>
          <li>
            <a href={`/categories/Soup`}>Soup</a>
          </li>
          <li>
            <a href={`/categories/Veggies`}>Veggies</a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Bars />;
    </div>
  );
}

export default Categories;
