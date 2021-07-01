import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.search
 * @param props.handleInputChange
 * @param props.handleFormSubmitChange
 * @param props.ThandleFormSubmitChange
 */
function Header({ search, handleInputChange, handleFormSubmitChange }) {
  // eslint-disable-next-line keyword-spacing
  return (
    <div className="App-header ">
      <h1>Heart Library</h1>
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
          <button className="btn btn-dark" onClick={handleFormSubmitChange}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmitChange: PropTypes.func
};

export default Header;
