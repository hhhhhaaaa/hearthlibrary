import { configureStore } from "@reduxjs/toolkit";
import recipeResultsReducer from "./features/RecipeResults/recipeResultsSlice";
import recipeReducer from "./features/Recipes/recipeSlice";

export default configureStore({
  reducer: {
    recipeResults: recipeResultsReducer,
    recipe: recipeReducer
  }
});
