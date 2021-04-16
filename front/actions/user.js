import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  const response = await axios.post("/login", JSON.stringify(data));

  localStorage.setItem("Authorization", response.headers.authorization);
  return response.data;
});

export const join = createAsyncThunk("user/join", async (data, thunkAPI) => {
  const response = await axios.post("/auth/join", JSON.stringify(data), config);
  return response.data;
});
