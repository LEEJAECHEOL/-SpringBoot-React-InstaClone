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
    return response.data;
  }
);

// 프로필 가져오기
export const profileGet = createAsyncThunk(
  "user/profileGet",
  async (data, thunkAPI) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const response = await axios.get(`/user/${data.id}`, config);
    return response.data;
  }
);

// follow

export const followPost = createAsyncThunk(
  "user/followPost",
  async (data, thunkAPI) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const response = await axios.post(`/follow/${data.id}`, data, config);
    return data;
  }
);
export const followDelete = createAsyncThunk(
  "user/followDelete",
  async (data, thunkAPI) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const response = await axios.delete(`/follow/${data.id}`, config);
    return data;
  }
);

export const followListGet = createAsyncThunk(
  "user/followListGet",
  async (data, thunkAPI) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const response = await axios.get(`/user/${data.id}/follow`, config);
    return response.data;
  }
);

// 프로필 수정하기
export const profilePut = createAsyncThunk(
  "user/profilePut",
  async (data, thunkAPI) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const response = await axios.put(`/user/${data.id}`, data, config);
    return data.id;
  }
);
