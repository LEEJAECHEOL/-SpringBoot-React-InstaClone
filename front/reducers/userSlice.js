import { createSlice } from "@reduxjs/toolkit";
import {
  join,
  login,
  load,
  changeProfileImage,
  profileGet,
  followPost,
  followDelete,
  followListGet,
} from "../actions/user";
import _find from "lodash/find";
import Router from "next/router";

const initialState = {
  isLoading: false,
  isProfileGetLoading: false,
  isFollowPostLoading: false, // follow
  isFollowDeleteLoading: false, //unfollow
  isFollowListGetLoading: false, // follow list 가져오기
  loginError: null,
  joinError: null,

  profile: null,
  principal: null,
  followList: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.principal = null;
      localStorage.removeItem("Authorization");
      Router.push("/login");
    },
  },
  extraReducers: (builder) =>
    builder
      // followListGet request
      .addCase(followListGet.pending, (state, action) => {
        state.isFollowListGetLoading = true;
      })
      // followListGet success
      .addCase(followListGet.fulfilled, (state, action) => {
        state.isFollowListGetLoading = false;
        state.followList = action.payload;
      })
      // followListGet fail
      .addCase(followListGet.rejected, (state, action) => {
        state.isFollowListGetLoading = false;
      })
      // followDelete request
      .addCase(followDelete.pending, (state, action) => {
        state.isFollowDeleteLoading = true;
      })
      // followDelete success
      .addCase(followDelete.fulfilled, (state, action) => {
        state.isFollowDeleteLoading = false;
        state.profile.followState = false;
        // 팔로우 리스트에서 구독 취소할 떄
        if (action.payload.profileId !== null) {
          const list = _find(state.followList, { userId: action.payload.id });
          list.followState = 0;
          if (action.payload.profileId === state.profile.user.id) {
            console.log("is run?");
            state.profile.followCount = state.profile.followCount - 1;
          }
        }
      })
      // followDelete fail
      .addCase(followDelete.rejected, (state, action) => {
        state.isFollowDeleteLoading = false;
      })
      // followPost request
      .addCase(followPost.pending, (state, action) => {
        state.isFollowPostLoading = true;
      })
      // followPost success
      .addCase(followPost.fulfilled, (state, action) => {
        state.isFollowPostLoading = false;
        state.profile.followState = true;
        // 팔로우 리스트에서 구독 할 때
        if (action.payload.profileId !== null) {
          const list = _find(state.followList, { userId: action.payload.id });
          list.followState = 1;
          if (action.payload.profileId === state.profile.user.id) {
            state.profile.followCount = state.profile.followCount + 1;
          }
        }
      })
      // followPost fail
      .addCase(followPost.rejected, (state, action) => {
        state.isFollowPostLoading = false;
      })
      // profileGet request
      .addCase(profileGet.pending, (state, action) => {
        state.isProfileGetLoading = true;
      })
      // profileGet success
      .addCase(profileGet.fulfilled, (state, action) => {
        state.isProfileGetLoading = false;
        state.profile = action.payload;
      })
      // profileGet fail
      .addCase(profileGet.rejected, (state, action) => {
        state.isProfileGetLoading = false;
      })
      // changeProfileImage request
      .addCase(changeProfileImage.pending, (state, action) => {
        state.isLoading = true;
      })
      // changeProfileImage success
      .addCase(changeProfileImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.principal.profileImageUrl = action.payload.profileImageUrl;
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
