import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    recipeFound(state, action) {
      state.push(action.payload);
    }
  }
});

export const { recipeFound } = recipeSlice.actions;

export default recipeSlice.reducer;
