import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

// 로그인
export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  const response = await axios.post("/login", JSON.stringify(data));

  localStorage.setItem("Authorization", response.headers.authorization);
  return response.data;
});

// 유저 정보 리로드
export const load = createAsyncThunk("user/load", async (data, thunkAPI) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  const response = await axios.get("/user/load", config);
  console.log(response.data);
  return response.data;
});

// 회원가입
export const join = createAsyncThunk("user/join", async (data, thunkAPI) => {
  const response = await axios.post("/auth/join", JSON.stringify(data), config);
  return response.data;
});

// 유저 프로필 사진 변경
export const changeProfileImage = createAsyncThunk(
  "user/changeProfileImage",
  async (data, thunkAPI) => {
    const formData = new FormData();
    formData.append("profileImageFile", data.file);
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.put(
      `/user/${data.id}/profileImageUrl`,
      formData,
      config
    );
    console.log(response.data);
    return response.data;
  }
);
