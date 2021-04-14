import { combineReducers } from "@reduxjs/toolkit";
const userSlice = require("./userSlice");

module.exports = combineReducers({
  user: userSlice.reducer,
});
