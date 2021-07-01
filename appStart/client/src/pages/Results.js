/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchRecipe from "../components/SearchRecipe/SearchRecipe";
import SearchResult from "../components/SearchResult/SearchResult";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.recipe
 */
function Results({ recipe }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  const handleFormSubmitChange = (event) => {
    event.preventDefault();
  };

  console.log(recipe);

  if (search === recipe[0].title) {
    console.log(search);
    setTitle(recipe.title);
    setDescription(recipe.description);
    setIngredients(recipe.ingredients);

    return (
      <div>
        <SearchRecipe
          value={search}
          handleInputChange={handleInputChange}
          handleFormSubmitChange={handleFormSubmitChange}
        />

        <SearchResult
          title={title}
          description={description}
          Ingredients={ingredients}
        />
      </div>
    );
  }

  return <h2>No page</h2>;
}

Results.propTypes = {
  recipe: PropTypes.array
};

export default Results;
