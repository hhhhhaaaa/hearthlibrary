/* eslint-disable no-unused-vars */
import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { recipeResultsFound } from "../features/RecipeResults/recipeResultsSlice";
import { searchSet } from "../features/Search/searchSlice";

import axios from "axios";

const recipeArray = [];

/**
 *
 */
function Results() {
  const recipeResults = useSelector((state) => state.recipeResults);
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const inputChange = (event) => {
    event.preventDefault();
    searchSet(event.target.value);
  };

  const formSubmit = async () => {
    if (search) {
      await axios
        .get("/api/recipe")
        .then(async ({ data }) => {
          await data.find((recFind) => {
            const recipeTitle = recFind.title.toLowerCase();
            const recipeResultsTitle = search.toLowerCase();

            if (recipeTitle.includes(recipeResultsTitle)) {
              recipeArray.push(recFind);
            }

            return null;
          });

          return null;
        })
        .then((morsePower) => {
          console.log(recipeArray);
          dispatch(recipeResultsFound(recipeArray));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const recipeList = recipeResults.map((rec, index) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <SearchResult key={index} />
    );
  });

  if (recipeResults.length <= 0) {
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
        <h2>No Results; Search Above</h2>
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
      <h2>Results</h2>
      {recipeList}
    </div>
  );
}

export default Results;
