import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const recipeResultsSlice = createSlice({
  name: "recipeResults",
  initialState,
  reducers: {
    recipeResultsFound(state, action) {
      state.push(action.payload);
    }
  }
});

export const { recipeResultsFound } = recipeResultsSlice.actions;

export default recipeResultsSlice.reducer;
