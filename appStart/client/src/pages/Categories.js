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
      <div className ="menu">
        <h2 className="text-center"> The Recipe Categories</h2>
        <ol className="span mr-3">
          <li >
            <a href={`/categories/Appetizers`}><span className="span" > Appetizers</span></a>
          </li>
          <li>
            <a href={`/categories/Beverages`}><span className="span" >Beverages</span></a>
          </li>
          <li>
            <a href={`/categories/Bread`}><span className="span" >Bread</span></a>
          </li>
          <li>
            <a href={`/categories/Casserole`}><span className="span" >Casserole</span></a>
          </li>
          <li>
            <a href={`/categories/Dessert`}><span className="span" >Dessert</span></a>
          </li>
          <li>
            <a href={`/categories/Entree`}><span className="span" >Entree</span></a>
          </li>
          <li>
            <a href={`/categories/Meat`}><span className="span" >Meat</span></a>
          </li>
          <li>
            <a href={`/categories/Miscellaneous`}><span className="span" >Miscellaneous</span></a>
          </li>
          <li>
            <a href={`/categories/Poultry`}><span className="span" >Poultry</span></a>
          </li>
          <li>
            <a href={`/categories/Salad`}><span className="span" >Salad</span></a>
          </li>
          <li>
            <a href={`/categories/Seafood`}><span className="span" >Seafood</span></a>
          </li>
          <li>
            <a href={`/categories/Sides`}><span className="span" >Sides</span></a>
          </li>
          <li>
            <a href={`/categories/Soup`}><span className="span" >Soup</span></a>
          </li>
          <li>
            <a href={`/categories/Veggies`}><span className="span" >Veggies</span></a>
          </li>
        </ol>
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
