import { createWrapper } from "next-redux-wrapper";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    // preloadedState, // 나중에 서버사이드 랜더링 할때 주석 풀 것.
    middleware: [...getDefaultMiddleware()],
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === "develpment",
});

export default wrapper;
