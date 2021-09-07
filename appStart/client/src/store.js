import { configureStore } from "@reduxjs/toolkit";
import recipeResultsReducer from "./features/RecipeResults/recipeResultsSlice";
import recipeReducer from "./features/Recipes/recipeSlice";
import userReducer from "./features/Users/userSlice";
import authenticateReducer from "./features/Authenticate/authenticateSlice";

export default configureStore({
  reducer: {
    authenticate: authenticateReducer,
    recipeResults: recipeResultsReducer,
    recipe: recipeReducer,
    user: userReducer
  }
});
