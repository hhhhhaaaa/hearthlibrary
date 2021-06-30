import React from "react";
import recipe from "../recipes/recipe.json";
// import Result from "../Result/Result";

function Header(props) {
    // eslint-disable-next-line keyword-spacing
    return (
        <div className="App-header ">
            <h1 >Heart Library</h1>
            <div className="input-group  w-50">
                <input type="text"
                    className="form-control"
                    placeholder="Search For Recipe...."
                    value={props.search}
                    // eslint-disable-next-line react/prop-types
                    onChange={props.handleInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={props.handleFormSubmitChange} >Search Recipe</button>
                
                </div>
            </div>

        </div>

    )

}
export default Header;