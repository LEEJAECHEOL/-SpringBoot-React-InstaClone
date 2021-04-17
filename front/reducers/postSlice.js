import { createSlice } from "@reduxjs/toolkit";
import { save, get } from "../actions/post";
import Router from "next/router";

const initialState = {
  isLoading: false,
  lastPage: false,
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // get request
      .addCase(get.pending, (state, action) => {
        // 다른 페이지를 갔다오면 posts를 초기화
        if (action.meta.arg === 0) {
          state.posts = [];
        }
        state.isLoading = true;
      })
      // get success
      .addCase(get.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload.content); // 글 목록 담기
        state.lastPage = action.payload.last;
        state.isLoading = false;
      })
      // get fail
      .addCase(get.rejected, (state, action) => {
        state.isLoading = false;
      })
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
