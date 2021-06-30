import React from "react";
// eslint-disable-next-line space-before-blocks
function SearchRecipe (props){
    return (
        <div className="Search-form">
<div className="input-group w-50  ">
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
 export default SearchRecipe;



