/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";

/**
 * @param props
 * @param props.results
 */
function SearchResult({ results }) {
  return (
    <ul>
      {results.map((result) => (
        <div>
          <li>{result.title}</li>
          <li>{result.description}</li>
          <li>{result.Ingredients}</li>
        </div>
      ))}
    </ul>
  );
}

SearchResult.propTypes = {
  results: PropTypes.object
};

export default SearchResult;
