/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import {
  recipeResultsFound,
  recipeResultsClear
} from "../../features/RecipeResults/recipeResultsSlice";
import Container from "../../components/Container/Container";
import axios from "axios";
let recipeArray = [];

/**
 *
 */
function Results() {
  const [search, setSearch] = useState("");

  const recipeResults = useSelector((state) => state.recipeResults);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
          dispatch(recipeResultsFound(recipeArray));
          setSearch("");
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

  useEffect(() => {
    return () => {
      if (search === "") {
        dispatch(recipeResultsClear());
        recipeArray = [];
      }
    };
  });

  if (recipeResults.length <= 0) {
    return (
      <Container>
        <div className="input-group  w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search For Recipe...."
            value={search}
            // eslint-disable-next-line react/prop-types
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={handleFormSubmit}>
              Search Recipe
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="Search-form">
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control  "
            placeholder="Search For Recipe...."
            value={search}
            // eslint-disable-next-line react/prop-types
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={handleFormSubmit}>
              Search Recipe
            </button>
          </div>
        </div>
      </div>
      <div className="searchResult">
        <h2 className="Search-h2 textColor">Results</h2>
        {recipeList}
      </div>
    </Container>
  );
}

export default Results;
