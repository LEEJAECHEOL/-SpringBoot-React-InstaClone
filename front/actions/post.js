import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

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
