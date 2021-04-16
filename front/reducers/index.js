import { combineReducers } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = require("./userSlice");

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

module.exports = combineReducers({
  user: userSlice.reducer,
});
