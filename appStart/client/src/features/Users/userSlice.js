import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFound(state, action) {
      state.push(action.payload);
    }
  }
});

export const { userFound } = userSlice.actions;

export default userSlice.reducer;
