import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jsonToken: ""
};

export const jsonTokenSlice = createSlice({
  name: "jsonToken", //JWT
  initialState,
  reducers: {
    replaceTkn: (state, action) => {
      state.jsonToken = action.payload;
    },
    deleteTkn: (state) => {
      state.jsonToken = "";
    }
  }
});

// Action creators are generated for each case reducer function
export const { replaceTkn, deleteTkn } = jsonTokenSlice.actions;

export default jsonTokenSlice.reducer;
