import { createSlice } from "@reduxjs/toolkit";
import { addToFavTeachers, getFavTeachers, removeFromFavTeachers } from "./operations";

const initialState = {
  favTeachers:[],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFavTeachers.pending, (state) => {

        state.error = null;
      })
      .addCase(getFavTeachers.fulfilled, (state, { payload }) => {
        state.favTeachers = payload;
        state.error = null;
      })
      .addCase(getFavTeachers.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addToFavTeachers.pending, (state) => {

        state.error = null;
      })
      .addCase(addToFavTeachers.fulfilled, (state, { payload }) => {
        state.favTeachers.push(payload);
        state.error = null;
      })
      .addCase(addToFavTeachers.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(removeFromFavTeachers.pending, (state) => {
        state.error = null;
      })
      .addCase(removeFromFavTeachers.fulfilled, (state, { payload }) => {
        state.favTeachers = state.favTeachers.filter((favTeacher)=>favTeacher !== payload);
        state.error = null;
      })
      .addCase(removeFromFavTeachers.rejected, (state, { payload }) => {
        state.error = payload;
      })
  },
});

export const userReducer = userSlice.reducer;
// removeFromFavTeachers