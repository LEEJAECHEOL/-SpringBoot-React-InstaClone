import { createSlice } from "@reduxjs/toolkit";
import { join } from "../actions/user";
import Router from "next/router";

const initialState = {
  joinLoading: false,
  joinError: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      // join request
      .addCase(join.pending, (state) => {
        state.joinLoading = true;
      })
      // join success
      .addCase(join.fulfilled, (state, action) => {
        state.joinLoading = false;
        Router.push("/login");
      })
      // join fail
      .addCase(join.rejected, (state, action) => {
        state.joinLoading = false;
        state.joinError = action.payload;
      }),
});

module.exports = userSlice;
