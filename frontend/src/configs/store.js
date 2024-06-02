import { configureStore } from "@reduxjs/toolkit";
import jsonTokenReducer from "../features/jsonTokenSlice";

export const store = configureStore({
  reducer: {
    user: jsonTokenReducer
  }
});
