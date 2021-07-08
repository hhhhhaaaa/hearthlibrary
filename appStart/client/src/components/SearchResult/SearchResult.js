/* eslint-disable react/jsx-key */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 *
 */
function SearchResult() {
  const recipeResults = useSelector((state) => state.recipeResults);

  return (
    <ul>
      {recipeResults[0].map((result, index) => (
        <div key={index}>
          <li className="textSubtle">{result.title}</li>
          <li className="textSubtle">{result.description}</li>
          <li className="textSubtle">{result.Ingredients}</li>
          <Link to={`/recipes/${result.title}`} className="textColor">
            View Post
          </Link>
        </div>
      ))}
    </ul>
  );
}
export default SearchResult;
