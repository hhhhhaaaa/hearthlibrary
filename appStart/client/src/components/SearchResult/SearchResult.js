/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 *
 */
function SearchResult() {
  const recipeResults = useSelector((state) => state.recipeResults);

  console.log("Search");
  console.log(recipeResults);

  return (
    <ul>
      {recipeResults[0].map((result, index) => (
        <div key={index}>
          <li>{result.title}</li>
          <li>{result.description}</li>
          <li>{result.Ingredients}</li>
          <Link to={`/recipes/${result.title}`} className="button muted-button">
            View Post
          </Link>
        </div>
      ))}
    </ul>
  );
}
export default SearchResult;
