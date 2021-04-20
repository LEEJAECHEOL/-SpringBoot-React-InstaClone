import { createSlice } from "@reduxjs/toolkit";
import _concat from "lodash/concat";
import _find from "lodash/find";
import _remove from "lodash/remove";
import {
  post,
  get,
  commentPost,
  commentDelete,
  likePost,
  likeDelete,
  exploreGet,
} from "../actions/post";
import Router from "next/router";

const initialState = {
  isLoading: false,
  isCommentPostLoading: false,
  isCommentDeleteLoading: false,
  isLikePostLoading: false, // like
  isLikeDeleteLoading: false, // unlike
  isExploreGetLoading: false,
  lastPage: false,
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // exploreGet request
      .addCase(exploreGet.pending, (state, action) => {
        // 다른 페이지를 갔다오면 posts를 초기화
        state.isExploreGetLoading = true;
      })
      // exploreGet success
      .addCase(exploreGet.fulfilled, (state, action) => {
        state.isExploreGetLoading = false;
        console.log(action.payload);
        state.posts = action.payload;
      })
      // exploreGet fail
      .addCase(exploreGet.rejected, (state, action) => {
        state.isExploreGetLoading = false;
      })
      // likeDelete request
      .addCase(likeDelete.pending, (state, action) => {
        state.isCommentDeleteLoading = true;
      })
      // likeDelete success
      .addCase(likeDelete.fulfilled, (state, action) => {
        state.isCommentDeleteLoading = false;
        const post = _find(state.posts, { id: action.payload.postId });
        post.likeState = false;
        post.likeCount = post.likeCount - 1;
      })
      // likeDelete fail
      .addCase(likeDelete.rejected, (state, action) => {
        state.isCommentDeleteLoading = false;
      })
      // likePost request
      .addCase(likePost.pending, (state, action) => {
        state.isCommentPostLoading = true;
      })
      // likePost success
      .addCase(likePost.fulfilled, (state, action) => {
        state.isCommentPostLoading = false;
        const post = _find(state.posts, { id: action.payload.postId });
        post.likeState = true;
        post.likeCount = post.likeCount + 1;
      })
      // likePost fail
      .addCase(likePost.rejected, (state, action) => {
        state.isCommentPostLoading = false;
      })
      // commentDelete request
      .addCase(commentDelete.pending, (state, action) => {
        state.isCommentDeleteLoading = true;
      })
      // commentDelete success
      .addCase(commentDelete.fulfilled, (state, action) => {
        state.isCommentDeleteLoading = false;
        const post = _find(state.posts, { id: action.payload.postId });
        _remove(post.comments, { id: action.payload.id });
      })
      // commentDelete fail
      .addCase(commentDelete.rejected, (state, action) => {
        state.isCommentDeleteLoading = false;
      })
      // commentPost request
      .addCase(commentPost.pending, (state, action) => {
        state.isCommentPostLoading = true;
      })
      // commentPost success
      .addCase(commentPost.fulfilled, (state, action) => {
        state.isCommentPostLoading = false;
        const post = _find(state.posts, { id: action.payload.post.id });
        post.comments.unshift(action.payload);
      })
      // commentPost fail
      .addCase(commentPost.rejected, (state, action) => {
        state.isCommentPostLoading = false;
      })
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
        state.posts = _concat(state.posts, action.payload.content);
        state.lastPage = action.payload.last;
        state.isLoading = false;
      })
      // get fail
      .addCase(get.rejected, (state, action) => {
        state.isLoading = false;
      })
      // post request
      .addCase(post.pending, (state, action) => {
        state.isLoading = true;
      })
      // post success -> / 로 이동
      .addCase(post.fulfilled, (state, action) => {
        state.isLoading = false;
        Router.push("/");
      })
      // post fail
      .addCase(post.rejected, (state, action) => {
        state.isLoading = false;
        alert("포스트 작성에 실패하였습니다.");
      }),
});

module.exports = postSlice;
