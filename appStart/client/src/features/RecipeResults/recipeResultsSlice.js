import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const recipeResultsSlice = createSlice({
  name: "recipeResults",
  initialState,
  reducers: {
    recipeResultsFound(state, action) {
      state.push(action.payload);
    },
    recipeResultsClear(state) {
      state.length = 0;
    }
  }
});

export const { recipeResultsFound, recipeResultsClear } =
  recipeResultsSlice.actions;

export default recipeResultsSlice.reducer;
