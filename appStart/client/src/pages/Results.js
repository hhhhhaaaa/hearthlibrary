/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SearchRecipe from "../components/SearchRecipe/SearchRecipe";
import SearchResult from "../components/SearchResult/SearchResult";
import axios from "axios";
import PropTypes from "prop-types";
import history from "../components/History/history";

const recipeArray = [];

/**
 * @param props
 * @param props.search
 * @param props.result
 */
function Results() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("test");
    console.log(result);
    setResult(recipeArray);
  }, [recipeArray]);

  console.log(recipeArray);

  const inputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const formSubmit = async (event) => {
    console.log("click");

    await axios
      .get("/api/recipe")
      .then(async ({ data }) => {
        const match = await data.find((recipe) => {
          const recipeTitle = recipe.title.toLowerCase();
          const recipeResultsTitle = search.toLowerCase();

          if (recipeTitle.includes(recipeResultsTitle)) {
            recipeArray.push(recipe);
          }

          return null;
        });

        return null;
      })
      .catch((error) => {
        console.log(error);
      });
    if (history.location.pathname !== "/search") {
      return history.replace("/search");
    }

    return null;
  };

  if (result.length >= 1) {
    console.log(search);
    setTitle(result.title);
    setDescription(result.description);
    setIngredients(result.ingredients);

    return (
      <div>
        <div className="input-group  w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search For Recipe...."
            value={search}
            // eslint-disable-next-line react/prop-types
            onChange={inputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onMouseDown={() => formSubmit()}>
              Search Recipe
            </button>
          </div>
        </div>
        <SearchRecipe value={search} />
        <SearchResult
          title={title}
          description={description}
          Ingredients={ingredients}
        />
      </div>
    );
  }

  return (
    <div className="input-group  w-50">
      <input
        type="text"
        className="form-control"
        placeholder="Search For Recipe...."
        value={search}
        // eslint-disable-next-line react/prop-types
        onChange={inputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-dark" onMouseDown={() => formSubmit()}>
          Search Recipe
        </button>
      </div>
    </div>
  );
}

Results.propTypes = {
  search: PropTypes.string,
  result: PropTypes.array
};

export default Results;
