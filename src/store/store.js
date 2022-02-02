import { configureStore } from "@reduxjs/toolkit";
import prorductReducer from "../slices/prorductSlice";

const store = configureStore({
  reducer: {
    products: prorductReducer,
  },
});

export default store;
