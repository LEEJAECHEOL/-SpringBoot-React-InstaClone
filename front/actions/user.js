import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

export const join = createAsyncThunk("user/join", async (data, thunkAPI) => {
  const response = await axios.post("/auth/join", JSON.stringify(data));
  return response.data;
});
