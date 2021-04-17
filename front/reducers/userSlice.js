import { createSlice } from "@reduxjs/toolkit";
import { join, login, load, changeProfileImage } from "../actions/user";
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
      state.principal = null;
    },
  },
  extraReducers: (builder) =>
    builder
      // changeProfileImage request
      .addCase(changeProfileImage.pending, (state, action) => {
        state.isLoading = true;
      })
      // changeProfileImage success
      .addCase(changeProfileImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.principal.profileImageUrl = action.payload;
      })
      // changeProfileImage fail -> 로그인 화면으로
      .addCase(changeProfileImage.rejected, (state, action) => {
        state.isLoading = false;
      })
      // load request
      .addCase(load.pending, (state, action) => {
        state.isLoading = true;
      })
      // load success
      .addCase(load.fulfilled, (state, action) => {
        state.isLoading = false;
        state.principal = action.payload;
      })
      // load fail -> 로그인 화면으로
      .addCase(load.rejected, (state, action) => {
        state.isLoading = false;
        alert("로그인 후 이용가능합니다.");
        Router.push("/login");
      })
      // login request
      .addCase(login.pending, (state, action) => {
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
      .addCase(join.pending, (state, action) => {
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
