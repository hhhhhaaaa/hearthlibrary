import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

export const authenticateSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    userAuthenticated(state) {
      state.isAuthenticated = true;
    },
    userIsNotAuthenticated(state) {
      state.isAuthenticated = false;
    }
  }
});

export const { userAuthenticated, userIsNotAuthenticated } =
  authenticateSlice.actions;

export default authenticateSlice.reducer;
