import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSet(state, action) {
      state.push(action.payload);
    }
  }
});

export const { searchSet } = searchSlice.actions;

export default searchSlice.reducer;
