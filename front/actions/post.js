import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const save = createAsyncThunk("post/save", async (data, thunkAPI) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "Content-Type": "multipart/form-data",
    },
  };
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("tags", data.tags);
  formData.append("caption", data.caption);
  const response = await axios.post("/post", formData, config);
  return response.data;
});

export const get = createAsyncThunk("post/get", async (data, thunkAPI) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  const response = await axios.get(`/post?page=${data}`, config);
  return response.data;
});
