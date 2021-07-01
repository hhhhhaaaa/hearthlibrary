import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line space-before-blocks
/**
 * @param props
 * @param props.search
 * @param props.handleFormSubmitChange
 * @param props.handleInputChange
 */
function SearchRecipe({ search, handleInputChange, handleFormSubmitChange }) {
  return (
    <div className="Search-form">
      <div className="input-group w-50  ">
        <input
          type="text"
          className="form-control"
          placeholder="Search For Recipe...."
          value={search}
          // eslint-disable-next-line react/prop-types
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={handleFormSubmitChange}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

SearchRecipe.propTypes = {
  search: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmitChange: PropTypes.func
};

export default SearchRecipe;
