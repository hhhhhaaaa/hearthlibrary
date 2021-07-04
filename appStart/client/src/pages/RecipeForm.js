import React from "react";

/**
 *
 */
function RecipeForm() {
  return (
    <form>
      <h1>Create A New Recipe</h1>
      <div>
        <label>Title</label>
        <textarea
          id="title-input"
          type="text"
          placeholder="Enter the Title of the Recipe"
        ></textarea>
        <br />
        <label>Description</label>
        <textarea
          id="description-input"
          type="text"
          placeholder="Enter the Description of the Recipe"
        ></textarea>
        <br />
        <label>Before You Begin</label>
        <textarea
          id="before-input"
          type="text"
          placeholder="Enter Any Pressing Details"
        ></textarea>
        <br />
        <label>Time</label>
        <textarea
          id="time-input"
          type="text"
          placeholder="Enter the Title of the Recipe"
        ></textarea>
        <br />
        <label>Yields</label>
        <textarea
          id="yield-input"
          type="text"
          placeholder="Enter the Approximate Output of the Recipe"
        ></textarea>
        <br />
        <label>Ingredients</label>
        <textarea
          id="ingredients-input"
          type="text"
          placeholder="Enter the Ingredients"
        ></textarea>
        <br />
        <label>Steps</label>
        <textarea
          id="steps-input"
          type="text"
          placeholder="Enter the Steps of the Recipe"
        ></textarea>
        <br />
        <label>Notes</label>
        <textarea
          id="notes-input"
          type="text"
          placeholder="Enter Any Notes Or Cool Information"
        ></textarea>
        <br />
        <label>Sources</label>
        <textarea
          id="sources-input"
          type="text"
          placeholder="Enter Where the Recipe is From and/or the Creator(s)"
        ></textarea>
        <br />
        <label>Category</label>
        <textarea
          id="category-input"
          type="text"
          placeholder="Enter the Category of the Recipe"
        ></textarea>
      </div>
    </form>
  );
}

export default RecipeForm;
