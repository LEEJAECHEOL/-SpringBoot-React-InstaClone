import { createSlice } from "@reduxjs/toolkit";
import { save } from "../actions/post";
import Router from "next/router";

const initialState = {
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // save request
      .addCase(save.pending, (state, action) => {
        state.isLoading = true;
      })
      // save success -> / 로 이동
      .addCase(save.fulfilled, (state, action) => {
        state.isLoading = false;
        Router.push("/");
      })
      // save fail
      .addCase(save.rejected, (state, action) => {
        state.isLoading = false;
        alert("포스트 작성에 실패하였습니다.");
      }),
});

module.exports = postSlice;
