import { createSlice } from "@reduxjs/toolkit";
import { join, login } from "../actions/user";
import Router from "next/router";

const initialState = {
  isLoading: false,
  loginError: null,
  joinError: null,

  principal: null,
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
      // login request
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.loginError = null;
      })
      // login success
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginError = null;
        Router.push("/");
      })
      // login fail
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.loginError = "로그인 실패";
      })
      // join request
      .addCase(join.pending, (state) => {
        state.isLoading = true;
      })
      // join success
      .addCase(join.fulfilled, (state, action) => {
        state.isLoading = false;
        Router.push("/login");
      })
      // join fail
      .addCase(join.rejected, (state, action) => {
        state.isLoading = false;
        state.joinError = action.payload;
      }),
});

module.exports = userSlice;
