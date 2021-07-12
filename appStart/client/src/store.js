import { configureStore } from "@reduxjs/toolkit";
import recipeResultsReducer from "./features/RecipeResults/recipeResultsSlice";
import recipeReducer from "./features/Recipes/recipeSlice";
import userReducer from "./features/Users/userSlice";

export default configureStore({
  reducer: {
    recipeResults: recipeResultsReducer,
    recipe: recipeReducer,
    user: userReducer
  }
});
